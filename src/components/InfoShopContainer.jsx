import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { Spinner } from "./Spinner";
import { InfoShop } from "./InfoShop";
import { Link } from "react-router-dom";
import { ErrorCart } from "./Widgets/ErrorCart";

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
          setPurchase(null);
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
    <Container style={{ minHeight: "70vh", marginBottom: "3em" }}>
      {purchase !== null ? (
        <>
          <h1
            style={{ fontWeight: "500" }}
            className="color-1 size-large_s pt-4 mb-2"
          >
            Resumen de tus compras:
          </h1>
          <InfoShop purchase={purchase} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "2em",
            }}
          >
            <Link to={"/"}>
              <button className="comprar">Aceptar</button>
            </Link>
          </div>
        </>
      ) : (
        <div style={{display:"flex",flexFlow:"column",alignItems:"center", alignContent:"center"}}>
          <h1 className="color-1" style={{ paddingTop: "1em" }}>No pudimos encontrar tu compra</h1>
          <p className="color-2">Asegurate de introducir correctamente el ID</p>
          <ErrorCart width={"300px"}/>
          <Link to={"/purchaseSearch"}>
              <button className="comprar">Aceptar</button>
            </Link>
        </div>
      )}
    </Container>
  );
};
