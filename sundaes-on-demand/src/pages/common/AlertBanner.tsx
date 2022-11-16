import Alert from "react-bootstrap/Alert";

interface propType{
  message: String,
  variant: string
}

const AlertBanner = ( props: propType) => {
  const alertMessage =
    props.message || "An unexpected error occurred. Please try again later.";
  const alertVariant = props.variant || "danger";

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
}
export default AlertBanner;
