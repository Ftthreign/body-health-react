import { useState } from "react";
import PropTypes from "prop-types";

import CheckoutForm from "./CheckoutForm";
import ItemData from "./ItemData";
import HealthyForm from "./HealthyForm";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutResult from "./CheckoutResult";

HealthyList.propTypes = {
  data: PropTypes.array,
  itemSelected: PropTypes.string,
  setItemSelected: PropTypes.func,
  count: PropTypes.number,
  setCount: PropTypes.func,
  totalPrice: PropTypes.number,
  stockLeft: PropTypes.number,
  selectedItem: PropTypes.object,
};
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
  const discountValue = Number((Math.random() * 0.9).toFixed(1));
  const discount = totalPrice * discountValue;

  return (
    <div className="get-to-do">
      <h2 style={{ textAlign: "left" }}>
        Want Glow up? we suggest you to Buy these!
      </h2>

      <div className="healthy-list-data">
        <HealthyForm>
          <p>Your Cart</p>
          <ItemData
            data={healthyFood}
            itemSelected={itemSelected}
            setItemSelected={setItemSelected}
            count={count}
            setCount={setCount}
            totalPrice={totalPrice}
            stockLeft={stockLeft}
            selectedItem={selectedItem}
          />
        </HealthyForm>

        <CheckoutForm>
          <CheckoutDetails
            totalPrice={totalPrice}
            discount={discount}
            discountValue={discountValue}
          />
          <CheckoutResult
            totalPrice={totalPrice}
            discount={discount}
            onCount={setCount}
            onSelected={setItemSelected}
          />
        </CheckoutForm>
      </div>
    </div>
  );
}

export default HealthyList;
