import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "./Spinner";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import data from "../data.json";

export const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(data);
  //     }, 1000);
  //   });
  //   promise.then((data) => {
  //     if(!id){
  //       setProducts(data);
  //       setLoading(false);
  //     }else{
  //       const productsFiltered = data.filter((product)=>product.categoryid===id);
  //       setProducts(productsFiltered);
  //       setLoading(false);
  //     }
  //   });
  // });
  // ! USEEFFECT CON FIREBASE
  useEffect(() => {
    const db = getFirestore();
    const refCollection = id
      // * Si tengo id voy a hacer una busqueda en la colección items en donde categoryid coincida con el id
      ? query(collection(db, "items"), where("categoryid", "==", id))
      // * Si no, solo muestro la colección
      : collection(db, "items");
    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) setProducts([]);
        else {
          if (!id) {
            setProducts(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
          } else {
          }
        }
      })
      .finally(() => {
        setLoading(false);
      });
  });
  // if(!id){
  //   setProducts(data);
  //   console.log(data);
  // }else{
  //   const productsFiltered = data.filter((product)=>product.category===id);
  //   setProducts(productsFiltered);
  // }

  if (loading) return <Spinner />;

  return (
    <Container style={{ minHeight: "70vh" }} className="mt-3">
      <h1>{props.greeting}</h1>
      <section className="items pb-5">
        <ItemList products={products} />
      </section>
    </Container>
  );
};
