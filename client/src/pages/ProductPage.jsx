import { useEffect, useState } from "react";
import { getProductsRequest } from "../api/products.api";
import { ProductCard } from "../components/ProductCard";

export const ProductPage = () => {
  const [productsl, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const response = await getProductsRequest();
      setProducts(response.data);
    }
    loadProducts();
  }, []);
  function productsRendered(){
    if(tasks.length == 0) return <h1>There's not products here.</h1>
    return productsl.map((product) => (<ProductCard product={product} key={product.id} />))
  }
  return (
    <div>
      <h1>Products</h1>
      {productsl.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
