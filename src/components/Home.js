import React from "react";
import Header from "./Header";
import CardB from "./CardB";
import CarouselB from "./CarouselB";
import Container from "react-bootstrap/Container";
import cardContent from "../Content/cardContent";
import AccordionB from "./AccordionB";
import accordionContent from "../Content/accordionContent";



function Home() {
    return (
        <>

            <Header />
            <CarouselB className="carousel" />
            <Container className="wrapper" >
                <Container className="row d-flex justify-content-between">
                    {cardContent.map((item, index) => (
                        <CardB key={index} item={item} />
                    ))}
                </Container>
            </Container>
            <Container>
                <h1 className="text">...</h1>
                <Container className="row d-flex justify-content-between">
                    {accordionContent.map((item, index) => (
                        <AccordionB key={index} item={item} />
                    ))}
                </Container>
            </Container>



        </>
    );
}

export default Home