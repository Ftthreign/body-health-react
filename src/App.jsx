import { useState } from "react";

import Header from "./components/header";
import BMICalculator from "./components/BMICalculator/BMICalculator";
import FormInput from "./components/BMICalculator/BMIForm";
import Result from "./components/BMICalculator/BMIResult";
import BMIInformation from "./components/BMICalculator/BMIInformation";
import BMIDescription from "./components/BMICalculator/BMIDescription";
import Description from "./components/Description";
import HealthyList from "./components/grocery/HealthyList";
import Footer from "./components/footer/footer";

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
