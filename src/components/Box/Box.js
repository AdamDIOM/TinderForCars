import { Button, Col, Container, Row } from "react-bootstrap";
import "./Box.css";

export default function Box(){
    return(
        <Container className="box">
            {/* photo */}
            <img className="carImage" alt="image of a car"/>
            {/* make/type | owner */}
            <Row>
                <Col md={0} sm={2} className="d-md-none"></Col>
                <Col md={8} sm={10}>Make/Type</Col>
                <Col md={0} sm={2} className="d-md-none"></Col>
                <Col md={4} sm={10}>Owner</Col>
            </Row>
            {/* yes/no */}
            <Row>
                <Col md={1} sm={2}></Col>
                <Col md={4} sm={8}>
                    <Button className="yesnoButton" variant="danger">NO</Button>
                    {/* on click run "nextCar" */}
                </Col>
                <Col md={1} sm={2}></Col>
                <Col md={1} sm={2}></Col>
                <Col md={4} sm={8}>
                    <Button className="yesnoButton" variant="success">YES</Button>
                    {/* on click run "contactOwner" */}
                </Col>
                <Col md={1} sm={2}></Col>
            </Row>
        </Container>
    )
}