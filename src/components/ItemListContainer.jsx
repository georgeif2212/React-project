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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
  //     }else{
  //       const productsFiltered = data.filter((product)=>product.categoryid===id);
  //       setProducts(productsFiltered);
  //     }
  //   }).finally(()=>{
  //     setLoading(false);
  //   })
  // });

  // ! USEEFFECT CON FIREBASE
  console.log(id);
  useEffect(() => {
    const db = getFirestore();
    const refCollection = id
      ? //* Si tengo id voy a hacer una busqueda en la colección items en donde categoryid coincida con el id
        query(collection(db, "items"), where("categoryid", "==", id))
      : //* Si no, solo muestro la colección
        collection(db, "items");
    console.log(refCollection);
    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          setProducts([]);
          console.log(products);
        } else {
          setProducts(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

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
