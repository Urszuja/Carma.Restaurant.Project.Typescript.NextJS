import React, { useContext } from "react";
import { DataStoreContext } from "../../components/DataStoreContext";

function CartPage() {
  const { clientsData } = useContext(DataStoreContext);
  console.log(clientsData);
  return <div>CartPage</div>;
}

export default CartPage;
