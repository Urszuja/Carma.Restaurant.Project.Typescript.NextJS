import React, { useContext } from "react";
import { DataStoreContext } from "../../components/DataStoreContext";
import EmptyBasket from "../../components/EmptyBasket/EmptyBasket";
import Form from "../../components/Form/Form";

function PlaceOrderPage() {
  const { cart } = useContext(DataStoreContext);

  return (
    <div className="final-page">
      {cart && cart.length === 0 ? <EmptyBasket /> : <Form />}
    </div>
  );
}

export default PlaceOrderPage;
