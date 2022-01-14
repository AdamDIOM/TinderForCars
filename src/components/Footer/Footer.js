import { Col, Row } from "react-bootstrap";
import "./Footer.css";

export default function Footer(){
    return(
            <Row className="footer">
                <Col sm={4} xs={12}>
                    <a href="https://github.com/AdamDIOM/TinderForCars/issues" target="_blank" rel="noreferrer">Report a bug!</a>
                </Col>
                <Col sm={4} xs={12} className="highlightCol">
                    <a href="https://github.com/AdamDIOM/TinderForCars" target="_blank" rel="noreferrer">Open source: Contribute here!</a>
                </Col>
                <Col sm={4} xs={12}>
                    <a href="https://adamd.fyi" target="_blank" rel="noreferrer">Get in touch</a>
                </Col>
            </Row>
    )
}