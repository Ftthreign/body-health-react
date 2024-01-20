import { useState } from "react";
import PropTypes from "prop-types";

import { BMIData } from "../../data/DataUtils";

const BMIDescription = ({ valueBMI }) => {
  const [typeBMI, setTypeBMI] = useState("Normal");

  function handleChanges(bmiValue) {
    const BMI_RANGE = [
      { range: [0, 18.4], status: "Underweight" },
      { range: [18.5, 24.9], status: "Normal" },
      { range: [25, 29.9], status: "Overweight" },
      { range: [30, Number.MAX_VALUE], status: "Obesity" },
    ];

    const result = BMI_RANGE.find(
      ({ range }) => bmiValue >= range[0] && bmiValue <= range[1]
    );

    return result ? result.status : "Normal";
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
