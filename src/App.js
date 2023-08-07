
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola, este es mi e-commerce"/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
