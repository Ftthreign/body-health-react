import PropTypes from "prop-types";

function CheckoutDetails({ totalPrice, discount, discountValue }) {
  return (
    <>
      <p>Checkout</p>
      <div className="checkout-content">
        <div>
          <p>Your cart subtotal : </p>
          <p>{`Discount Applied (${discountValue * 100}%) : `}</p>
        </div>
        <div>
          <p>Rp. {totalPrice.toFixed(2)}</p>
          <p>Rp. - {discount.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

CheckoutDetails.propTypes = {
  totalPrice: PropTypes.number,
  discount: PropTypes.number,
  discountValue: PropTypes.number,
};

export default CheckoutDetails;
