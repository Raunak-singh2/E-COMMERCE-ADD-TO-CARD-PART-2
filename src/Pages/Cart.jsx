import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/CartSlice";
function Cart() {
  const showCardPages = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRmove = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
    
      <h2 style={{ textAlign: "center" }}>Your add to card items.</h2>
      <div>
        {
          showCardPages.map((product) => (
          <div
            key={product.id}
            style={{
              textAlign: "center",
              width: 200,
              border: "2px solid #ccc",
              marginBottom: 10,
            }}
          >
            <img
              src={product.image}
              style={{ width: 130, height: 140, textAlign: "center" }}
              alt="image"
            />
            <h4>{product.title}</h4>
            <p>INR:{product.price}</p>
            <button
              style={{
                padding: ".6rem 1.7rem",
                fontSize: "17px",
                background: "red",
                color: "#fff",
              }}
              onClick={() => handleRmove(product.id)}
            >
              Remove card
            </button>
          </div>
        )) 
        }
      </div>
    </>
  );
}

export default Cart;
