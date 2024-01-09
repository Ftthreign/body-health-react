import Suggestion from "./BMISuggestion";
/* eslint-disable react/prop-types */
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

export default Result;
