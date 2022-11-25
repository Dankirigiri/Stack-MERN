import axios from "axios";
export const getProductsRequest = async () =>
  await axios.get("http://localhost:4000/products");

export const createProductsRequest = async (product) =>
  await axios.post("http://localhost:4000/products", product);

export const deleteProductsRequest = async (id) =>
  await axios.delete(`http://localhost:4000/products/${id}`);
