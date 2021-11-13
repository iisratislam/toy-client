import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <Container fluid>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Fade left duration={2000} distance="40px">
                            <Image src="https://t4.ftcdn.net/jpg/02/68/55/43/240_F_268554358_1FwZPPjpiihBWHWdqUCMEYWgGXPJ4UZw.jpg" fluid />
                        </Fade>
                    </Col>
                    <Col md={4} className="p-md-5 mt-md-0 mt-4">
                        <Fade right duration={2000} distance="40px">
                            <p>About Our Shop</p>
                            <h3>How We Can Help you</h3>
                            <p className="text-muted my-4 pr-md-5"
                            >We are Best for the kids toys Since 2002.Play time is always the greatest thing for kids, they can play all day with their best-loved toys such as wonderful building toys, new dress-up toys, or those popular sports-oriented toys, outdoor toys, novelty magic toys etc, there’s no better way to capture and excite their young imagination. So come here you may recall your happy childhood and enjoy a memorial purchase time.</p>
                            <Button
                                className="btn-main"
                                href="#pricing">
                                Learn More
                            </Button>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;