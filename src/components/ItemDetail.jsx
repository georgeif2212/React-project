import Container from 'react-bootstrap/Container';
export const ItemDetail = ({ product }) => {
  let valorRedondeado = (product.price * 16.75).toFixed(2);
  return (
    <Container>
      <article className="itemDetail" >
      <img src={product.image} />
      <div className="">
        <h1 className='color-1 text-right'>{product.title}</h1>

        <h2 className='color-2'>$ {valorRedondeado}</h2>
        <p className='color-3'>{product.description}</p>
      </div>
    </article>
    </Container>
    
  );
};
