import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";
import { InfoUser } from "./components/InfoUser";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenido!" />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/infoUser" element={<InfoUser/>} />
          <Route
            path="/categoryid/:id"
            element={<ItemListContainer greeting="Categoría: " />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
