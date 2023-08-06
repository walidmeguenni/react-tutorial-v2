import React, { useEffect, useState } from "react";
import { useFtechProduct } from "./useFetch";
import "../../styles/table.css";
const Table = () => {
  const [products, setProducts] = useState(null);
  const data = useFtechProduct();

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
