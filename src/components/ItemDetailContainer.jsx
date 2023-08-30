import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  if(!product) return <div>Loading ...</div>;

  return (
    <Container className="mt-3">
      
      <ItemDetail product={product}/>
    </Container>
  );
};
