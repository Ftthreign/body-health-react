import { useState } from "react";

import Header from "@/header";
import Description from "@/Description";
import Footer from "@/footer/footer";
import BMICalculator from "BMICalculator/BMICalculator";
import FormInput from "BMICalculator/FormInput";
import Result from "BMICalculator/Result";
import BMIInformation from "BMICalculator/BMIInformation";
import BMIDescription from "BMICalculator/BMIDescription";
import HealthyList from "Grocery/HealthyList";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const BMIValue = weight / Math.pow(height / 100, 2);

  return (
    <div>
      <div className="header">
        <Header />
        <BMICalculator>
          <FormInput
            weight={weight}
            onSetWeight={setWeight}
            height={height}
            onSetHeight={setHeight}
          />
          <Result weight={weight} height={height} result={BMIValue} />
        </BMICalculator>
      </div>

      <BMIInformation>
        <BMIDescription valueBMI={BMIValue} />
      </BMIInformation>

      <Description />

      <HealthyList />

      <Footer />
    </div>
  );
}

export default App;
