import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        if(!id){
          setProducts(data);
          console.log(data);
        }else{
          const productsFiltered = data.filter((product)=>product.category===id);
          setProducts(productsFiltered);
        }
        
        
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <Container className="mt-3">
      <h1>{props.greeting}</h1>
      <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
        <ItemList products={products}/>
      </div>
    </Container>
  );
};
