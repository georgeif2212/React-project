import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
import { Spinner } from "./Spinner";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  // ! UseEffect con FireBase
  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);
    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
      setLoading(false)
    });
  });

  if (loading) return <Spinner/>

  return (
    <Container style={{minHeight:"70vh"}} className="mt-3">
      <ItemDetail product={product} />
    </Container>
  );
};
