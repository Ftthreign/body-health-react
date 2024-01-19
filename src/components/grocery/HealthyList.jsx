import { useState } from "react";
import PropTypes from "prop-types";

import CheckoutForm from "./CheckoutForm";
import ItemData from "./ItemData";
import HealthyForm from "./HealthyForm";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutResult from "./CheckoutResult";
import { healthyFood } from "../../data/DataUtils";

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

export default HealthyList;
