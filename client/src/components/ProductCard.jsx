import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export const ProductCard = ({ product }) => {
  const { deleteProducts, toggleProductStock } = useProducts();
  const navigate = useNavigate();
  const handleStock = () => {
    toggleProductStock(product.id);
  };
  return (
    <div className="bg-slate-300 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{product.title}</h2>
      </header>
      <p className="text-xs">{product.description}</p>
      <div className="flex justify-between">
        <span className="bg-blue-400 rounded-md">
          {product.done == 1 ? "Disponible" : "Sin stock"}
        </span>
        <span className="bg-orange-300 rounded-md px-2 py-1">
          {product.createdAt}
        </span>
      </div>
      <div className="flex gap-x-3">
        <button
          className="bg-red-500 px-2 py-1 text-white"
          onClick={() => deleteProducts(product.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-800 px-2 py-1 text-white"
          onClick={() => navigate(`/edit/${product.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-white"
          onClick={() => handleStock()}
        >
          Toggle Stock
        </button>
      </div>
    </div>
  );
};
