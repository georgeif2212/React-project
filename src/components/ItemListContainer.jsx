import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {getFirestore,getDocs,collection} from 'firebase/firestore'


export const ItemListContainer = (props) => {
  const [loading, setLoading]=useState(true);
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    const db = getFirestore();
    const refCollection = collection(db,"items");
    getDocs(refCollection).then((snapshot)=>{
      if(snapshot.size===0)console.log("no results");      
      else{
        setProducts(snapshot.docs.map((doc)=>{
          setLoading(false);
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

  if(loading) return <div>Loading ...</div>;
  return (
    <Container className="mt-3">
      <h1>{props.greeting}</h1>
      <section className="products">
        <ItemList products={products}/>
      </section>
    </Container>
  );
};
