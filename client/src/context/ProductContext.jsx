import { createContext, useContext, useState } from "react";
import {
  getProductsRequest,
  deleteProductsRequest,
  createProductsRequest,
  getProductRequest,
  updateProductRequest,
} from "../api/products.api";

export const ProductContext = createContext();
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductContextPRovider");
  }
  return context;
};
export const ProductContextProvider = ({ children }) => {
  const [productsl, setProducts] = useState([]);
  async function loadProducts() {
    const response = await getProductsRequest();
    setProducts(response.data);
  }
  const deleteProducts = async (id) => {
    try {
      const response = await deleteProductsRequest(id);
      console.log(response);
      setProducts(productsl.filter((product) => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const createProducts = async (product) => {
    try {
      const response = await createProductsRequest(product);
      setProducts([...productsl, response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  const getProduct = async (id) => {
    try {
      const response = await getProductRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const updateProduct = async (id, newValues) => {
    try {
      const response = await updateProductRequest(id, newValues);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        productsl,
        loadProducts,
        deleteProducts,
        createProducts,
        getProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};