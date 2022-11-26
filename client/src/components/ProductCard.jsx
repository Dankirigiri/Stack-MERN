import { useProducts } from "../context/ProductContext";

export const ProductCard = ({ product }) => {
  const { deleteProducts } = useProducts()
  
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>{product.done == 1 ? "Disponible" : "Sin stock"}</span>
      <span>{product.createdAt}</span>
      <button onClick={() => deleteProducts(product.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
};
