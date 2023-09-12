import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore,getDocs,collection} from 'firebase/firestore'


export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    const db = getFirestore();
    const refCollection = collection(db,"productos");
    getDocs(refCollection).then((snapshot)=>{
      if(snapshot.size===0)console.log("no results");
      
      else{
        setProducts(snapshot.docs.map((doc)=>{
          return({id:doc.id,...doc.data()});
        }));
      }
      
    });
  })

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if(!id){
  //         setProducts(data);
          
  //       }else{
  //         const productsFiltered = data.filter((product)=>product.category===id);
  //         setProducts(productsFiltered);
  //       }
        
        
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // }, []);

  if(!products) return <div>Loading ...</div>;
  return (
    <Container className="mt-3">
      <h1>{props.greeting}</h1>
      <section className="products">
        <ItemList products={products}/>
      </section>
    </Container>
  );
};
