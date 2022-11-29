import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { ProductContextProvider } from "./context/ProductContext";
import { NotFound } from "./pages/NotFound";
import { ProductForm } from "./pages/ProductForm";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <Navbar />
        <Routes>
          <Route index element={<ProductPage />}></Route>
          <Route path="/" element={<ProductPage />}></Route>
          <Route path="/productform" element={<ProductForm />}></Route>
          <Route path="/edit/:id" element={<ProductForm />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ProductContextProvider>
    </div>
  );
}

export default App;
