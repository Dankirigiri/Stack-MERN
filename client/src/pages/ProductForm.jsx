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
      <Formik
        initialValues={product}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (values.description != "" && values.title != "") {
            if (params.id) {
              updateProduct(params.id, values);
            } else {
              createProducts(values);
            }
            setProducts({
              title: "",
              description: "",
            });
          } else {
            return alert(
              "You must to type a title or a description! Try it again"
            );
          }
          return navigate("/");
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-teal-300 max-w-sm rounded-md p-4"
          >
            <h1 className="text-xl font-bold textuppercase text-center">
              {params.id ? "Edit Product" : "New Product"}
            </h1>
            <label className="block">title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.title}
            />
            <label className="block">description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a desription"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
