import React, { useEffect, useState } from "react";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

function Services() {
  const [posts, setPosts] = useState("");

  const getApiData = async () => {
    const response = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    ).then((response) => response.json());

    setPosts(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Header/>
      <Container className="mt-3">
        {posts &&
          posts.map((post) => (
            <Card className="text-center mt-3">
              <Card.Header>{post.id}</Card.Header>
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.brand}</Card.Text>
                <Button variant="primary">...</Button>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          ))}
      </Container>
      
    </>
  );
}

export default Services;
