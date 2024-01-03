import { openDB } from "idb";

const DB_NAME = "ShoppingCartDB2";
const STORE_NAME = "TaxPrice";

let dbPromise;

export const initTaxPriceDB = async () => {
  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = openDB(DB_NAME, 3, {
    upgrade: async (db) => {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
        store.createIndex("price", "price", { unique: true });
      }
    },
  });

  return dbPromise;
};

const setTaxPrice = async (price) => {
  try {
    const db = await initTaxPriceDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    await store.put({ id: 1, price });
    await tx.done;
    getTaxPrice();
  } catch (error) {
    console.error("Error setting tax price:", error);
  }
};

export const getTaxPrice = async () => {
  try {
    const db = await initTaxPriceDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);

    // Assuming there's a single record with key 1
    const taxPrice = await store.get(1);

    return taxPrice ? taxPrice.price : setTaxPrice(30);
  } catch (error) {
    console.error("Error getting tax price:", error);
    return 0; // Default value in case of an error
  }
};
