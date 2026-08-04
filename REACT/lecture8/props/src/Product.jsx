export const Product = (props) => {
  return (
    <div>
      <p>name {props.name}</p>
      <p>price ${props.price}</p>
      <p>BOL {props.BOL ? "TRUE" : "FLASE"}</p>
      <p>catagory {props.cata.join(", ")}</p>
    </div>
  );
};
