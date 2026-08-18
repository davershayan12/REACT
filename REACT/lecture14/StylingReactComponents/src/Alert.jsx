import styles from "./Alert.module.css";
export const Alert = ({ children, type = "error" }) => {
  return <div className={`${styles.alert} ${styles[type]} `}>{children}</div>;
};
