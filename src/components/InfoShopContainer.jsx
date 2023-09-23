import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { Spinner } from "./Spinner";
import { InfoShop } from "./InfoShop";

export const InfoShopContainer = () => {
  const { id } = useParams();
  const [purchase, setPurchase] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "orders", id);
    getDoc(refDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPurchase(snapshot.data());
        } else {
          console.log("El documento no existe.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener el documento:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  return (
    <Container style={{ minHeight: "70vh", marginBottom:"3em"}}>
      <h1
        style={{ fontWeight: "500" }}
        className="color-1 size-large_s pt-4 mb-2"
      >
        Resumen de tus compras:
      </h1>
      <InfoShop purchase={purchase} />
      
    </Container>
  );
};
