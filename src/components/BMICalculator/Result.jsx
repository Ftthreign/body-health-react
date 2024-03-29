import Suggestion from "./Suggestion";
import PropTypes from "prop-types";

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

Result.propTypes = {
  weight: PropTypes.number,
  height: PropTypes.number,
  result: PropTypes.number,
};

export default Result;
