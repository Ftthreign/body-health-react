/* eslint-disable react/prop-types */
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

export default Suggestion;
