import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      {<ItemListContainer greeting="Hola, este es mi e-commerce"/>}
      {/* <ItemDetailContainer greeting="Hola, este es itemDetailContainer"/> */}
    </>
  );
}

export default App;
