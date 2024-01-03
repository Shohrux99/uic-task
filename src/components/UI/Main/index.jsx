import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Box, Button, Divider, Modal } from "@mui/material";
import CardDetails from "../CardDetails";
import ProductItem from "../ProductItem";
import styles from "./styles.module.scss";
import { useEffect, useMemo, useState } from "react";
import { addToCart, getAllCartItems } from "db/idb";
import toast, { Toaster } from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "500px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  padding: "20px",
};

export default function MainCard() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setAllProducts(res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const defaultProducts = useMemo(() => {
    return allProducts.map((item) => ({
      productId: item.id,
      name: item.title,
      desc: item.description,
      price: item.price,
      image: item.image,
      quantity: 1,
    }));
  }, [allProducts]);

  const fetchData = () => {
    getAllCartItems()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  };

  const addProductToCart = (product) => {
    addToCart(product)
      .then((res) => {
        fetchData();
        toast.success("Successfully added to cart!");
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  useEffect(() => {
    getAllCartItems()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const isAdded = (productId) => {
    return data?.some((item) => item.productId === productId);
  };

  return (
    <div className={styles.mainWrapper}>
      <Toaster />
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <div className={styles.backButton}>
            <button>
              <ArrowBackIosRoundedIcon />
              Shopping Continue
            </button>
          </div>

          <Divider
            sx={{
              margin: "23px 0 24px 0",
              borderBottomWidth: "1.5px",
            }}
          />

          <div className={styles.cart}>
            <div className={styles.title}>
              <h2>Shopping cart</h2>
              <p>You have {data?.length} item in your cart</p>
            </div>

            <div className={styles.items}>
              {data?.length ? data.map((item, index) => <ProductItem key={item.productId} item={item} fetchData={fetchData} />) : "No items in cart"}

              <Button
                sx={{
                  background: "#565abb",
                  borderRadius: "10px",
                }}
                onClick={handleOpen}
              >
                Add Products
              </Button>
            </div>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                  }}
                >
                  {defaultProducts.map((item) =>
                    isAdded(item.productId) ? null : (
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={item.image}
                              alt=""
                              style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "10px",
                              }}
                            />
                            <div>
                              <p>{item.name}</p>
                              <p>$ {item.price}</p>
                            </div>
                          </div>
                          <button
                            style={{
                              background: "#565abb",
                              color: "#fff",
                              padding: "5px 10px",
                              borderRadius: "5px",
                            }}
                            onClick={() => addProductToCart(item)}
                          >
                            Add
                          </button>
                        </div>
                        <Divider
                          sx={{
                            margin: "10px 0",
                            borderBottomWidth: "1.5px",
                          }}
                        />
                      </div>
                    )
                  )}
                </div>
              </Box>
            </Modal>
          </div>
        </div>

        <div className={styles.rightSide}>
          <CardDetails data={data} />
        </div>
      </div>
    </div>
  );
}
