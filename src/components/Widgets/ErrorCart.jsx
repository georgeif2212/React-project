import { ReactComponent as ErrorCartSVG } from "../../assets/cartError.svg";

export const ErrorCart = ({ width }) => {
  return (
    <div style={{ opacity: "0.3" }}>
      <ErrorCartSVG style={{ width: width, height: "auto" }} />
    </div>
  );
};
