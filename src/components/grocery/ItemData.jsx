/* eslint-disable react/prop-types */
function ItemData({
  data,
  setItemSelected,
  itemSelected,
  count,
  setCount,
  totalPrice,
  stockLeft,
  selectedItem,
}) {
  function handleInput(e) {
    setItemSelected(e);
    setCount(1);
  }

  return (
    <div className="container-input">
      <img src={selectedItem ? selectedItem.image : ""} alt="" width={"50px"} />
      <div>
        <select
          value={itemSelected}
          onChange={(e) => handleInput(e.target.value)}
        >
          {data.map((item) => (
            <option key={item.stock} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <p>
          <b>Type : {selectedItem ? selectedItem.type : ""}</b>
        </p>
        <p>Stock {stockLeft}</p>
      </div>
      {stockLeft >= 1 ? (
        <div className="button-count">
          <button onClick={() => setCount(count > 1 ? count - 1 : count)}>
            -
          </button>
          <label>{count}</label>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      ) : (
        <h2>Stock Empty</h2>
      )}
      <h2>Rp. {selectedItem && totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default ItemData;
