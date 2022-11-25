import { deleteProductsRequest } from "../api/products.api";


export const ProductCard = ({ product }) => {
    const handleDelete = async (id) => {
        try{
            const response = await deleteProductsRequest(id)
            console.log(response)
        } catch(error){
            console.error(error);
        }
        
    }
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>{product.done == 1 ? "Disponible" : "Sin stock"}</span>
      <span>{product.createdAt}</span>
      <button onClick={() => handleDelete(product.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
};
