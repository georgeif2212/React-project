import { ReactComponent as CardSvg } from "../../assets/creditCard.svg";

export const CreditCardWidget = ({ width }) => {
  return (
    <div style={{ opacity: "0.4" }}>
      <CardSvg style={{ width: width, height: "auto" }} />
    </div>
  );
};
