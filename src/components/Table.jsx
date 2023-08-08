import React, { useState, useEffect } from "react";
import "../styles/TableComponent.css";
import { fetchproducts, deleteProduct, creatProduct } from "../api/products";
import AddProductModal from "./Modal";

const TableComponent = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (id) => {
    try {

      await deleteProduct(id);
      const updatedProducts = products.filter((product) => product._id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addProduct = async (newProduct) => {
    try {
      const response = await creatProduct(newProduct);
      console.log(response);
      const updatedProducts = [...products, response.data.product];
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetchproducts(); //1+1
        setProducts(response.Products); //2s
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="table-container">
      <button className="add-button" onClick={openModal}>
        Add Product
      </button>

      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Company</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.company}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button
                    className="action-button"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                  {/* You can add other action buttons here if needed */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <AddProductModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        addProduct={addProduct}
      />
    </div>
  );
};

export default TableComponent;
