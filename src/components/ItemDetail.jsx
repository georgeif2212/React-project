export const ItemDetail = ({product}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <h1>{product.title}</h1>
      <img src={product.image} />
      <h2>{product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
};
