import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export const ProductForm = () => {
  const { createProducts, getProduct, updateProduct } = useProducts();
  const [product, setProducts] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadaProduct = async () => {
      if (params.id) {
        const [product] = await getProduct(params.id);
        setProducts({
          title: product.title,
          description: product.description,
        });
        console.log(product);
      }
    };
    loadaProduct();
  }, []);
  return (
    <div>
      <h1>{params.id ? "Edit Product" : "New Product"}</h1>
      <Formik
        initialValues={product}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (values.description != "" && values.title != "") {
            if(params.id){
              updateProduct(params.id, values);
            }else{
              createProducts();
            }
            setProducts({
              title:"",
              description:"",
            })
            return navigate("/");
          } else {
            return alert(
              "You must to type a title or a description! Try it again"
            );
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label>description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a desription"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
