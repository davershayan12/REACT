import { ActionButton } from "./ActionButton";
export const Newslatter = () => {
  const handleSUb = () => {
    alert("subs");
  };
  return (
    <div>
      <h2>hello</h2>
      <ActionButton text="subscribe" onClick={handleSUb} />
    </div>
  );
};
