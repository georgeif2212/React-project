import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { useEffect } from "react";
// import {getFirestore,getDoc,doc} from 'firebase/firestore'
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";

function App() {
  // useEffect(()=>{
  //   const db = getFirestore();
  //   const refDoc = doc(db,"productos","WaX2ImU1sPjas3ARSAYN");
  //   getDoc(refDoc).then((snapshot)=>{
  //     // console.log(snapshot.id,snapshot.data());
  //     console.log({id: snapshot.id,...snapshot.data()});
  //   });
  // })
  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "productos");
    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      // else
      // console.log(snapshot.docs);
      else {
        // console.log(
        //   snapshot.docs.map((doc) => {
        //     return { id: doc.id, ...doc.data() };
        //   })
        // );
      }
      // console.log(snapshot.id,snapshot.data());
      // console.log({id: snapshot.id,...snapshot.data()});
    });
  });

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
          <Route
            path="/category/:id"
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
