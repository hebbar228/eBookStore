import { useLocation } from "react-router-dom";
import { OrderSuccess } from "./Components/OrderSuccess";
import { OrderFailure } from "./Components/OrderFailure";
import { useTitle } from "../../hooks/useTitle";

export const OrderSummary = () => {
  const { state } = useLocation();
  useTitle("Order Summary");

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data}/> : <OrderFailure /> }
    </main>
  )
}