import Button from "react-bootstrap/Button";
import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

interface propType{
  setOrderPhase: any
}

const OrderEntry = ( props: propType ) => {
  const { totals } = useOrderDetails();

  // disable order button if there aren't any scoops in order
  const orderDisabled = totals.scoops === 0;

  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>
        Grand total: {formatCurrency(totals.scoops + totals.toppings)}
      </h2>
      <Button disabled={orderDisabled} onClick={() => props.setOrderPhase("review")}>
        Order Sundae!
      </Button>
    </div>
  );
}
export default OrderEntry;