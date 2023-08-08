import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/AddProductModal.css";

const AddProductModal = ({ isOpen, closeModal, addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addProduct({name,price,company,quantity});
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Product Modal"
      className="modal-product-content"
      overlayClassName="modal-product-overlay"
    >
      <div className="modal-product-header">
        <h2>Add Product</h2>
        <button className="modal-close-button" onClick={closeModal}>
          Close
        </button>
      </div>
      <form className="modal-product-form" onSubmit={handleSubmit}>
        <div>
          <label className="modal-label">Name:</label>
          <input
            type="text"
            className="modal-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="modal-label">Price:</label>
          <input
            type="number"
            className="modal-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="modal-label">Company:</label>
          <input
            type="text"
            className="modal-input"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="modal-label">Quantity:</label>
          <input
            type="number"
            className="modal-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button className="add-product-button" type="submit">
          Add Product
        </button>
      </form>
    </Modal>
  );
};

export default AddProductModal;
