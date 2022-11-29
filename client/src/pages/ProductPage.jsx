import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";

export const ProductPage = () => {
  const { productsl, loadProducts } = useProducts();
  useEffect(() => {
    loadProducts();
  }, []);
  function productsRendered() {
    if (productsl.length == 0) return <h1>There're not products here.</h1>;
    return productsl.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
  }
  return (
    <div>
      <h1>Products</h1>
      {productsRendered()}
    </div>
  );
};
