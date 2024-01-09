import { useState } from "react";
import Header from "./components/header";
import BMICalculator from "./components/BMICalculator";
import Description from "./components/Description";
import BMIDescription from "./components/BMIDescription";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const BMIValue = weight / Math.pow(height / 100, 2);

  return (
    <div>
      <div className="header">
        <Header />
        <BMICalculator
          height={height}
          weight={weight}
          setHeight={setHeight}
          setWeight={setWeight}
          BMIValue={BMIValue}
        />
      </div>

      <div className="data-information">
        <img
          src="./healthy-people.webp"
          width={"400px"}
          height={"400px"}
          style={{ borderRadius: "14px 0 0 14px" }}
        />

        <div className="information-BMI">
          <h1>What your BMI result means</h1>
          <BMIDescription valueBMI={BMIValue} />
        </div>
      </div>
      <Description />
    </div>
  );
}

export default App;
