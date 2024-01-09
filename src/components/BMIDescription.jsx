/* eslint-disable react/prop-types */
import { useState } from "react";

const BMIData = [
  {
    title: "Normal",
    description:
      "A BMI range of 18.5 to 24.9 is considered a 'helthy weight. Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutrious diet with reduced fat and sugar content, incorporating sample fruit and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week'",
  },
  {
    title: "Underweight",
    description:
      "A BMI below 18.5 signifies a weight lower than what's considered healthy. Individuals falling into this category might face risks associated with nutrient deficiencies and other health issues. Efforts to attain a healthy weight may involve increasing nutrient intake, including proteins, healthy fats, and carbohydrates, along with careful medical supervision.",
  },
  {
    title: "Overweight",
    description:
      "This BMI range indicates someone in the overweight category. It suggests excess body weight, potentially increasing the risk of heart disease, high blood pressure, or diabetes. Managing weight through a balanced diet, regular physical activity, and adopting a healthier lifestyle can help reduce the risk of such health conditions.",
  },
  {
    title: "Obesity",
    description:
      "A BMI of 30 or higher classifies someone in the obesity category, which can further be divided into different levels. Obesity escalates the risk of serious health issues like heart disease, type 2 diabetes, stroke, and more. Weight management becomes crucial with the help of medical professionals, dietary planning, and increased regular physical activity.",
  },
];

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

export default BMIDescription;
