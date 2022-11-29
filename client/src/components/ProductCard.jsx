import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export const ProductCard = ({ product }) => {
  const { deleteProducts, toggleProductStock } = useProducts();
  const navigate = useNavigate();
  const handleStock = () => {
    toggleProductStock(product.id)
  };
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>{product.done == 1 ? "Disponible" : "Sin stock"}</span>
      <span>{product.createdAt}</span>
      <button onClick={() => deleteProducts(product.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${product.id}`)}>Edit</button>
      <button onClick={() => handleStock()}>Toggle Stock</button>
    </div>
  );
};
