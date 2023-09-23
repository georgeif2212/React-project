import { ReactComponent as SearchSVG } from "../../assets/searchSVG.svg";

export const SearchWidget = ({ width }) => {
  return (
    <div style={{ opacity: "0.4" }}>
      <SearchSVG style={{ width: width, height: "auto" }} />
    </div>
  );
};
