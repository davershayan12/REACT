export const NameList = () => {
  const names = ["Daver", "shayan", "tanzeel"];
  const nameList = names.map((name, index) => (
    <h2>
      {index}
      {name}
    </h2>
  ));
  return <div>{nameList}</div>;
};
