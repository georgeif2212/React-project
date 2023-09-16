import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";
import data from "../data.json";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const productById = data.find((product) => product.id === id);
        resolve(productById);
      }, 1000);
    });
    promise.then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, []);

  // ! UseEffect con FireBase
  // useEffect(() => {
  //   const db = getFirestore();
  //   const refDoc = doc(db, "items", id);
  //   getDoc(refDoc).then((snapshot) => {
  //     setProduct({ id: snapshot.id, ...snapshot.data() });
  //   });
  // });

  if (loading) return <div>Loading ...</div>;

  return (
    <Container className="mt-3">
      <ItemDetail product={product} />
    </Container>
  );
};
