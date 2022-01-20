import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import "./New.css";

export default function New(){
    return(
        <Container className="new-box">
            <Form className="forms">
                <FormGroup>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" />
                </FormGroup><FormGroup>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number"/>
                    <Form.Text>Must be able to receive texts</Form.Text>
                </FormGroup><FormGroup>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="location" placeholder="Enter town/village"/>
                </FormGroup><FormGroup>
                    <Form.Check type="checkbox" label="Monday" />
                    <Form.Check type="checkbox" label="Tuesday" />
                    <Form.Check type="checkbox" label="Wednesday" />
                    <Form.Check type="checkbox" label="Thursday" />
                    <Form.Check type="checkbox" label="Friday" />
                </FormGroup>
                <hr />
                <FormGroup>
                    <Form.Label>Registration Plate</Form.Label>
                    <Form.Control type="reg-plate" placeholder="Enter registration plate" />
                    <Form.Text>Used to identify your car</Form.Text>
                </FormGroup><FormGroup>
                    <Form.Label>Make</Form.Label>
                    <Form.Control type="make" placeholder="Enter car make" />
                </FormGroup><FormGroup>
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="model" placeholder="Enter car model" />
                </FormGroup>
            </Form>
        </Container>
    )
}