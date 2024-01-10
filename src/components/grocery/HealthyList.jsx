import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import HealthyForm from "./HealthyForm";
/* eslint-disable react/prop-types */
const healthyFood = [
  {
    name: "Apple",
    type: "Fruit",
    price: 5000,
    stock: 50,
    image: "../../foods/apple.png",
  },
  {
    name: "Broccoli",
    type: "Vegetable",
    price: 7000,
    stock: 30,
    image: "../../foods/broccoli.png",
  },
  {
    name: "Avocado",
    type: "Fruit",
    price: 10000,
    stock: 40,
    image: "../../foods/avocado.png",
  },
  {
    name: "Salmon Fish",
    type: "Protein",
    price: 25000,
    stock: 20,
    image: "../../foods/fish.png",
  },
  {
    name: "Organic Honey",
    type: "Bee Product",
    price: 15000,
    stock: 25,
    image: "../../foods/honey.png",
  },
];

function HealthyList() {
  const [itemSelected, setItemSelected] = useState("Apple");
  const [count, setCount] = useState(1);

  const selectedItem = healthyFood.find((items) => items.name === itemSelected);
  const totalPrice = count * selectedItem.price;
  const stockLeft = selectedItem.stock + 1 - count;

  return (
    <>
      <h2 style={{ textAlign: "left" }}>
        Want Glow up? we suggest you to Buy these!
      </h2>
      <div className="healthy-list-data">
        <HealthyForm
          data={healthyFood}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
          count={count}
          setCount={setCount}
          totalPrice={totalPrice}
          stockLeft={stockLeft}
          selectedItem={selectedItem}
        />
        <CheckoutForm
          totalPrice={totalPrice}
          setCount={setCount}
          setItemSelected={setItemSelected}
        />
      </div>
    </>
  );
}

export default HealthyList;
