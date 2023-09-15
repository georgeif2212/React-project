import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);
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
