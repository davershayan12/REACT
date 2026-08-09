export const ProductList = () => {
  const Products = [
    { id: 1, name: "laptop", price: 67 },
    { id: 2, name: "Computer", price: 99 },
    { id: 3, name: "Tab", price: 70 },
  ];

  return (
    <>
      {Products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        );
      })}
    </>
  );
};
