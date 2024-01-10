/* eslint-disable react/prop-types */
function CheckoutForm({ totalPrice, setCount, setItemSelected }) {
  const discount = totalPrice * 0.1;

  const handleCheckout = () => {
    alert("Checkout Success");
    setCount(1);
    setItemSelected("Apple");
  };
  return (
    <div className="checkout">
      <p>Checkout</p>
      <div className="checkout-content">
        <div>
          <p>Your cart subtotal : </p>
          <p>Discount Applied (10%) : </p>
        </div>
        <div>
          <p>Rp. {totalPrice.toFixed(2)}</p>
          <p>Rp. - {discount.toFixed(2)}</p>
        </div>
      </div>

      <div className="result">
        <h2>Rp. {(totalPrice - discount).toFixed(2)}</h2>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
