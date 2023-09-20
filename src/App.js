import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";
import { InfoUser } from "./components/InfoUser";
import { Footer } from "./components/Footer";
import React from "react";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido!" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/infoUser" element={<InfoUser />} />
          <Route
            path="/categoryid/:id"
            element={<ItemListContainer greeting="Categoría: " />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
