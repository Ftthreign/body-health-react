import PropTypes from "prop-types";

function CheckoutResult({ totalPrice, discount, onCount, onSelected }) {
  const handleCheckout = () => {
    alert("Checkout Success");
    onCount(1);
    onSelected("Apple");
  };
  return (
    <div className="result">
      <h2>Rp. {(totalPrice - discount).toFixed(2)}</h2>
      <button className="checkout-btn" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

CheckoutResult.propTypes = {
  totalPrice: PropTypes.number,
  discount: PropTypes.number,
  onCount: PropTypes.func,
  onSelected: PropTypes.func,
};

export default CheckoutResult;
