import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

const axios = require('axios')

interface propType{
  optionType: string
}
interface itemType {
  name: string,
  imagePath: string
}

const Options = ( props: propType ) => {
  const [items, setItems] = useState<itemType[]>([]);

  // optionType is 'scoops' or 'toppings
  useEffect(() => {
    axios.get(`http://localhost:3030/${props.optionType}`)
      .then((response: any) => setItems(response.data))
      .catch((error: Error) => {
        // TODO: handle error response
      });
  }, [props]);

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = props.optionType === "scoops" ? ScoopOption : ToppingOption;

  const optionItems = items!.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
export default Options;