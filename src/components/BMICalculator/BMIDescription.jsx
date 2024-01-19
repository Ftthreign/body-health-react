import { useState } from "react";
import PropTypes from "prop-types";

import { BMIData } from "../../data/DataUtils";

const BMIDescription = ({ valueBMI }) => {
  const [typeBMI, setTypeBMI] = useState("Normal");

  function handleChanges(bmiValue) {
    if (bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return "Overweight";
    } else if (bmiValue > 30) {
      return "Obesity";
    } else {
      return "Normal";
    }
  }

  if (valueBMI !== undefined) {
    const category = handleChanges(valueBMI);
    if (typeBMI !== category) {
      setTypeBMI(category);
    }
  }

  return (
    <div>
      <h3>- {typeBMI.toUpperCase()} - </h3>
      <h3 style={{ textAlign: "justify" }}>
        {BMIData.find((data) => data.title === typeBMI)?.description}
      </h3>
    </div>
  );
};

BMIDescription.propTypes = {
  valueBMI: PropTypes.number,
};

export default BMIDescription;
