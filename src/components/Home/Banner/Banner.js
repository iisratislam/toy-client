import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center banner">
                <Col md={6} className="p-md-5 order-2 order-md-1">
                    <Fade left duration={2000} distance="40px">
                        <h1>Explore Our Shop</h1>
                        <p className="text-muted my-4 pr-md-5">You can get the best kids toys here</p>
                        <Button
                            className="btn-main"
                            href="#services">
                            Get Started
                        </Button>
                    </Fade>
                </Col>
                <Col md={5} className="order-1 order-md-2">
                    <Fade right duration={2000} distance="40px">
                        <Image src="https://i.pinimg.com/originals/60/0d/ac/600dac5975efc33bb11384bd701b4ccf.jpg" fluid />
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;