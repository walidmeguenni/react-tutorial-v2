import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

export const fetchproducts = () =>
  API.get("/products").then((res) => {
    return res.data;
  });

export const creatProduct = (newProduct) => API.post("/products", newProduct);

export const updateProduct = (newProduct, id) =>
  API.patch(`/products/${id}`, newProduct);

export const deleteProduct = (id) =>
  API({
    method: "DELETE",
    url: `/products/${id}`,
    headers: {
      "Content-Type": "appliction/json",
    },
  });

export const updateproductimage = (newuser, id) =>
  API({
    method: "patch",
    url: `/products/updateproductimage/${id}`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: newuser,
  });
