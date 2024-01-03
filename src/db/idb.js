import { openDB } from "idb";

const DB_NAME = "ShoppingCartDB2";
const STORE_NAME = "CartItems";

let dbPromise;

export const initCartDB = async () => {
  const version = await openDB(DB_NAME).then((db) => db.version);

  if (version === 0) {
    await deleteDB(DB_NAME);
  }

  dbPromise = openDB(DB_NAME, 3, {
    upgrade: async (db, oldVersion, newVersion, transaction) => {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
        const productsInDB = await store.getAll();
      }
    },
  });

  return dbPromise;
};


export const addToCart = async (item) => {
  try {
    const db = await initCartDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    await store.add(item);
    await tx.done;
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};

export const updateCartItem = async (item) => {
  try {
    const db = await initCartDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    await store.put(item);
    await tx.done;
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};

export const removeFromCart = async (productId) => {
  try {
    const db = await initCartDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);

    const index = store.index("productId");
    const cursor = await index.openCursor(IDBKeyRange.only(productId));

    if (cursor) {
      await store.delete(cursor.primaryKey);
    }

    await tx.done;
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
};

export const getAllCartItems = async () => {
  try {
    const db = await initCartDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const result = await store.getAll();
    console.log("Fetched cart items:", result);
    return result;
  } catch (error) {
    console.error("Error getting all cart items:", error);
    return [];
  }
};
