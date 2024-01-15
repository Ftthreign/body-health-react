import PropTypes from "prop-types";

HealthyForm.propTypes = {
  children: PropTypes.array,
};
function HealthyForm({ children }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="form-healthy" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default HealthyForm;
