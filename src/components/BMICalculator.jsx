// import { useState } from "react";

/* eslint-disable react/prop-types */
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

function FormInput({ height, onSetHeight, weight, onSetWeight }) {
  return (
    <form>
      <div className="input-data">
        <label>Height </label>
        <input
          type="number"
          step="5"
          placeholder="0"
          value={height}
          onChange={(e) => onSetHeight(Number(e.target.value))}
        />

        <label>Weight</label>
        <input
          type="number"
          step="5"
          placeholder="0"
          value={weight}
          onChange={(e) => onSetWeight(Number(e.target.value))}
        />
      </div>
    </form>
  );
}

function Result({ weight, height, result }) {
  return (
    <div className="bmi-result">
      {weight !== 0 && height !== 0 ? (
        <>
          <div>
            <p>Your BMI is..</p>
            <h2>{result.toFixed(1)}</h2>
          </div>
          <Suggestion result={result} />
        </>
      ) : (
        <div>
          <h2>Welcome!</h2>
          <p>
            {"Enter your height and weight and you'll see your BMI result here"}
          </p>
        </div>
      )}
    </div>
  );
}

function Suggestion({ result }) {
  return (
    <h3>
      {result < 18.5 && "Your BMI falls within the healthy weight range"}
      {result > 18.5 &&
        result <= 24.9 &&
        "Your BMI suggests you're healthy weight range"}
      {result >= 25 &&
        result <= 29.9 &&
        "Your BMI suggests you're in the overweight category."}
      {result >= 30 && "Your BMI indicates obesity"}
    </h3>
  );
}

export default BMICalculator;
