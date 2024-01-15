import PropTypes from "prop-types";

CheckoutForm.propTypes = {
  children: PropTypes.array,
};

function CheckoutForm({ children }) {
  return <div className="checkout">{children}</div>;
}

export default CheckoutForm;
