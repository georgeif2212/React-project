import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
// import {getFirestore,getDocs,collection} from 'firebase/firestore'

import data from "../data.json";

export const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
    promise.then((data) => {
      if(!id){
        setProducts(data);
        setLoading(false);
      }else{
        const productsFiltered = data.filter((product)=>product.categoryid===id);
        setProducts(productsFiltered);
        setLoading(false);
      }
    });
  });
  // ! USEEFFECT CON FIREBASE
  // useEffect(()=>{
  //   const db = getFirestore();
  //   const refCollection = collection(db,"items");
  //   getDocs(refCollection).then((snapshot)=>{
  //     if(snapshot.size===0)console.log("no results");
  //     else{
  //       setProducts(snapshot.docs.map((doc)=>{
  //         setLoading(false);
  //         return({id:doc.id,...doc.data()});
  //       }));
  //     }

  //   });
  // })
  // if(!id){
  //   setProducts(data);
  //   console.log(data);
  // }else{
  //   const productsFiltered = data.filter((product)=>product.category===id);
  //   setProducts(productsFiltered);
  // }

  if (loading) return <div>Loading ...</div>;

  return (
    <Container className="mt-3">
      <h1>{props.greeting}</h1>
      <section className="products">
        <ItemList products={products} />
      </section>
    </Container>
  );
};
