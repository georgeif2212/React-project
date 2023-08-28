import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola, este es mi e-commerce" />}/>
        <Route path="/category/:id" element={<ItemListContainer greeting="Hola, este es category/:id" />}/>
        <Route path="/item/:id" element={<ItemDetailContainer greeting="Hola, este es itemDetailContainer"/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
