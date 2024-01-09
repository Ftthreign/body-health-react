/* eslint-disable react/prop-types */
import FormInput from "./BMIForm";
import Result from "./BMIResult";
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

export default BMICalculator;
