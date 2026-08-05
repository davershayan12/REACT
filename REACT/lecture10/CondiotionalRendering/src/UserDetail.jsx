export const UserDetails = ({ name, isOnline }) => {
  if (isOnline) {
    return (
      <div>
        <h1>{name}</h1>
        <p>status: online</p>
        <p>availible for chat</p>
      </div>
    );
  }
  return (
    <div>
      <h1>{name}</h1>
      <p>status: offline</p>
      <p>not availible for chat</p>
    </div>
  );
};
