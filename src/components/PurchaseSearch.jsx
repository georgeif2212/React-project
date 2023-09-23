import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SearchWidget } from "./Widgets/SearchWidget";
import { warn } from "./toasts/Toasts";

export const PurchaseSearch = () => {
  const [purchaseId, setPurchaseId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Validar que purchaseId no esté vacío y tenga el formato correcto
    if (purchaseId.trim() === "") {
      warn();
      return;
    }
    // Redirigir a la página de detalles de la compra
    navigate(`/infoShop/${purchaseId}`);
  };

  return (
    <Container style={{ minHeight: "70vh" }} className="mt-3">
      <h1>Buscar compra por ID</h1>
      <div className="purchaseSearch">
        <div className="purchaseSearch-input">
          <input
            type="text"
            value={purchaseId}
            className="form-control"
            placeholder="Ingresa el ID de tu compra"
            required
            autoComplete="off"
            onChange={(e) => setPurchaseId(e.target.value)}
          />
          <button className="comprar" onClick={handleSearch}>
            Buscar
          </button>
        </div>

        <SearchWidget width={"200px"} />
      </div>
    </Container>
  );
};
