import "./Alert.css";
export const Alert = ({ children, type = "error" }) => {
  return <div className={`alert ${type}`}>{children}</div>;
};
