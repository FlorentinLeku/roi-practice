import Carousel from 'react-bootstrap/Carousel';
import carouselContent from '../Content/carouselContent';


function CarouselB() {
  return (
    <Carousel variant="dark">
      {carouselContent.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={'../assets/' + item.image}
            alt="...loading"
            height="700"
          />
          <Carousel.Caption className="text-dark">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselB;