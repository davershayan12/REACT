export const MenuItem = ({ name, Price, onOrder }) => {
  return (
    <div>
      <span>
        {name} - ${Price}
      </span>
      <button onClick={() => onOrder(name, Price)}>order </button>
    </div>
  );
};
