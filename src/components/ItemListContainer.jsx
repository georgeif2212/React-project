import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
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
