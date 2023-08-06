import React, { useState } from "react";
import "../styles/form.css";
import { useNavigate } from "react-router-dom";
const ProductRequestForm = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(productName);
    console.log(quantity);
    console.log(price);

    let formData = new FormData();
    formData.append("productName", productName);
    formData.append("quantity", quantity);
    formData.append("price", price);

    if (true) {
      navigate("/");
    } else {
      navigate("/contact");
    }

    //send post request to save the data fetch/axios

    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    //  }
  };

  return (
    <div className="container">
      <h1>Product Request Form</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <div>
          <button type="submit">AddPoduct</button>
        </div>
      </form>
    </div>
  );
};

export default ProductRequestForm;
