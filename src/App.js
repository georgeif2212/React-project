
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hello fucking world"/>
    </>
  );
}

export default App;
