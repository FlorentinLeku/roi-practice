import React,{useState, useEffect} from 'react'
import '../Styles/AboutUsS.scss';
import Header from './Header';
import Video from './Video';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";




const AboutUs = () => {

  const [posts, setPosts] = useState("");

  const getApiData = async () => {
    const response = await fetch(
      ""
    ).then((response) => response.json());

    setPosts(response);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <Header />
      <Video />
      <Container className="mt-3">
        {posts &&
          posts.map((post) => (
            <Card className="text-center mt-3">
              <Card.Header>{post.id}</Card.Header>
              <Card.Img width="100%" height="260vw " object-fit="cover" variant="top" src={post.image}  alt="loading..."/>
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.brand}</Card.Text>
                <Link to="/TeamMembers">
            <Button variant="primary">Go somewhere</Button>
          </Link>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          ))}
      </Container>
      
  

    </>
  )
}
export default AboutUs