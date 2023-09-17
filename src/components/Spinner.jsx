import { useState } from "react";
import { Container } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";

export const Spinner = () => {
  let [color] = useState("#000000");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "70vh",
        alignItems: "center",
      }}
      className="sweet-loading"
    >
      <ClipLoader
        color={color}
        css={override}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};
