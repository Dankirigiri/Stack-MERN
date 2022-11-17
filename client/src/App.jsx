import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./pages/NotFound";
import { ProductForm } from "./pages/ProductForm";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<ProductPage />}></Route>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/productform" element={<ProductForm />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
