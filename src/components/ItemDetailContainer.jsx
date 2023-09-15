import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(true);
  const { id } = useParams();
  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProduct(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // }, []);
  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "productos", id);
    getDoc(refDoc).then((snapshot) => {
      // console.log(snapshot.id,snapshot.data());
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  });

  if (!product) return <div>Loading ...</div>;

  return (
    <Container className="mt-3">
      <ItemDetail product={product} />
    </Container>
  );
};
