import { ActionButton } from "./ActionButton";
export const Contact = () => {
  const handleSendMsg = () => {
    alert("sending your msg");
  };
  return (
    <div>
      <h2>contact us</h2>
      <ActionButton text="send msg" onClick={handleSendMsg} />
    </div>
  );
};
