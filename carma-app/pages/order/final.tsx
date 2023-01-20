import React, { useContext } from "react";
import { DataStoreContext } from "../../components/DataStoreContext";
import Form from "../../components/Form/Form";

function PlaceOrderPage() {
  const { cart } = useContext(DataStoreContext);

  return (
    <div className="final-page">
      {cart && cart.length === 0 ? (
        <div>Here comes modal with redirect</div>
      ) : (
        <Form />
      )}
    </div>
  );
}

export default PlaceOrderPage;
