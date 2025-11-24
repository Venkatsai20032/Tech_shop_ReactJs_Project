import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch, BsCart, BsPerson, BsCartX } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


export default function EmptyCart() {
    const navigate = useNavigate();
  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#d5d5d5" }}>
      {/* Only the empty cart UI here — header/nav is provided by Header component */}
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <BsCartX style={{ fontSize: "110px", color: "#ff2e2e" }} />

        <h4 className="mt-3">Your Cart is Empty</h4>

       <button
  onClick={() => navigate('/products')}
  className="mt-4"
  style={{
    background: "#ff2e2e",
    border: "none",
    padding: "10px 30px",
    borderRadius: "6px",
    fontSize: "17px",
    color: "#fff",
  }}
>
  Start Shopping
</button>

      </div>
    </div>
  );
}
