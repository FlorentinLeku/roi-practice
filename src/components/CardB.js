import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";





function CardB({ item: { id, title, body, image, price } }) {
  return (
    <Card className="card mb-3" style={{ width: "18rem", height: "550px" }}>
      <Card.Img width="100%" height="260vw " object-fit="cover" variant="top" src={`./assets/${image}`}  alt="loading..."/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Card.Text >Price:{price}</Card.Text>
        <Button variant="primary">More</Button>
        
      </Card.Body>
    </Card>
  );
}

export default CardB;