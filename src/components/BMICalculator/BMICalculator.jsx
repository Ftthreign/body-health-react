import FormInput from "./BMIForm";
import Result from "./BMIResult";
import PropTypes from "prop-types";

function BMICalculator({ weight, height, setHeight, setWeight, BMIValue }) {
  return (
    <div className="bmi-card">
      <Title>Enter your details below</Title>
      <div className="input-container">
        <FormInput
          weight={weight}
          onSetWeight={setWeight}
          height={height}
          onSetHeight={setHeight}
        />
        <Result weight={weight} height={height} result={BMIValue} />
      </div>
    </div>
  );
}

function Title({ children }) {
  return <h3>{children}</h3>;
}

BMICalculator.propTypes = {
  weight: PropTypes.number,
  height: PropTypes.number,
  setHeight: PropTypes.func,
  setWeight: PropTypes.func,
  BMIValue: PropTypes.number,
};

Title.propTypes = {
  children: PropTypes.string,
};

export default BMICalculator;
