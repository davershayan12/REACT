export const Greeting = ({ name = "guest", msg = "hellow" }) => {
  return (
    <div>
      <h2>
        {msg}, {name}
      </h2>
    </div>
  );
};
