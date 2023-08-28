import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data[4]);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  if(!product) return <div>Loading ...</div>;

  return (
    <Container className="mt-3">
      <h1>{props.greeting}</h1>
      <ItemDetail product={product}/>
    </Container>
  );
};
