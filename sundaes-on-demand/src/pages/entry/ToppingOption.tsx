import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useOrderDetails } from "../../contexts/OrderDetails";

interface propType{
  name: String,
  imagePath: string
}

const ToppingOption = (props: propType) => {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e: any) => {
    updateItemCount(props.name, e.target.checked ? 1 : 0, "toppings");
  };

  return (
    <Col xs={6} sm={4} md={3} lg={2} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${props.imagePath}`}
        alt={`${props.name} topping`}
      />
      <Form.Group controlId={`${props.name}-topping-checkbox`}>
        <Form.Check type="checkbox" onChange={handleChange} label={props.name} />
      </Form.Group>
    </Col>
  );
}

export default ToppingOption;
