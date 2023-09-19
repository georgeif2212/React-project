import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Spinner } from "./Spinner";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // ! USEEFFECT CON FIREBASE
  useEffect(() => {
    const db = getFirestore();
    const refCollection = id
      ? //* Si tengo id voy a hacer una busqueda en la colección items en donde categoryid coincida con el id
        query(collection(db, "items"), where("categoryid", "==", id))
      : //* Si no, solo muestro la colección
        collection(db, "items");
    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          setProducts([]);
        } else {
          setProducts(
            snapshot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <Container style={{ minHeight: "70vh" }} className="mt-3">
      <h1>{props.greeting}</h1>
      <section className="items pb-5">
        <ItemList products={products} />
      </section>
    </Container>
  );
};
