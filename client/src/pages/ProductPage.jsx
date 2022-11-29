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
      <h1 className="text5xl text-white text-center">Products</h1>
      <div className="grid grid-cols-3 gap-2">{productsRendered()}</div>
    </div>
  );
};
