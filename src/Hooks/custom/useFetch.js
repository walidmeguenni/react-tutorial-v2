import { useEffect, useState } from "react";

export const useFtechProduct = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // Simulate an asynchronous API call with setTimeout (replace this with actual API call)
    setTimeout(() => {
      const fetchedProducts = [
        { name: "iphone", price: 123 },
        { name: "samsung", price: 55 },
        { name: "watch", price: 52 },
        { name: "car", price: 10 },
      ];

      setProducts(fetchedProducts);
    }, 2000); // Simulate 1-second delay

    // In a real-world scenario, you'd use a fetch or axios call here instead of setTimeout.
  }, []);

  return products;
};
