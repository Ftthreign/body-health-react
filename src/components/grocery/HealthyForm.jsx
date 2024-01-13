import ItemData from "./ItemData";
import PropTypes from "prop-types";

HealthyForm.propTypes = {
  data: PropTypes.array,
  itemSelected: PropTypes.string,
  setItemSelected: PropTypes.func,
  count: PropTypes.number,
  setCount: PropTypes.func,
  totalPrice: PropTypes.number,
  stockLeft: PropTypes.number,
  selectedItem: PropTypes.object,
};
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
