import { MenuItem } from "./Menuitem";
export const Menu = () => {
  const handleOrder = (itemname, itemprice) => {
    alert(`you ordered: ${itemname} for:${itemprice}`);
  };
  return (
    <div>
      <h2>Our menu</h2>
      <MenuItem name="Pizza" Price={15} onOrder={handleOrder}></MenuItem>
      <MenuItem name="burger" Price={1} onOrder={handleOrder}></MenuItem>
      <MenuItem name="zinger" Price={5} onOrder={handleOrder}></MenuItem>
      <MenuItem name="Pizza" Price={10} onOrder={handleOrder}></MenuItem>
    </div>
  );
};
