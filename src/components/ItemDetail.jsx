export const ItemDetail = ({product}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <h1>{product.name}</h1>
      <img src={product.image} />
    </div>
  );
};
