import PropTypes from "prop-types";

function BMICalculator({ children }) {
  return (
    <div className="bmi-card">
      <Title>Enter your details below</Title>
      <div className="input-container">{children}</div>
    </div>
  );
}

function Title({ children }) {
  return <h3>{children}</h3>;
}

BMICalculator.propTypes = {
  children: PropTypes.array,
};

Title.propTypes = {
  children: PropTypes.string,
};

export default BMICalculator;
