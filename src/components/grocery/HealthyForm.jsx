/* eslint-disable react/prop-types */
import ItemData from "./ItemData";
function HealthyForm({
  data,
  setItemSelected,
  itemSelected,
  count,
  setCount,
  totalPrice,
  stockLeft,
  selectedItem,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="form-healthy" onSubmit={handleSubmit}>
      <p>Your Cart</p>
      <ItemData
        data={data}
        itemSelected={itemSelected}
        setItemSelected={setItemSelected}
        count={count}
        setCount={setCount}
        totalPrice={totalPrice}
        stockLeft={stockLeft}
        selectedItem={selectedItem}
      />
    </form>
  );
}

export default HealthyForm;
