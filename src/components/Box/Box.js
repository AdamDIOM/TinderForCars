import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Box.css";



var dataArray = [];

const missingData = {
    "car" : {
        "make" : "undefined",
        "model" : "undefined",
        "image" : "undefined.png"
    },
    "owner" : {
        "forename" : "undefined",
        "surname" : "undefined",
        "number" : "undefined"
    }
}


var current = 0;

function getCurrent(){
    console.log(current);
}



export default function Box(){
    async function importData(){
        /* const fetchedData = */ await fetch("./data.json")
        .then(res => res.json())
        .then(data => dataArray = data);
        if(dataArray.length > 0 ) setCurrentData(dataArray[0]);
        setLoaded(true);
        console.log("fetching");
    }
    
    useEffect(() => {
        importData();
    }, [])

    // use twilio function as api to send text
    async function contactOwner(){
        // use twilio to send a text somehow?
        
        var phoneNum = window.prompt("enter your phone num (entire +447624xxxxxx or equivalent)");
    
        //const phoneNum = "+447624420298";
        const text=`Hey ${currentData.owner.forename}, carshare found! Send a message to ` + phoneNum;
        // change phoneNum to the car owner
        /*const response = */await fetch(`https://adam-test-3383.twil.io/tinderforcars?text=${text}&number=${currentData.owner.number}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          });
    
        alert("Text sent! Await further messages.");
    }

    const [loaded, setLoaded] = useState(false);
    const [currentData, setCurrentData] = useState(missingData);
    if(loaded){
        return(
            <Container className="box">
                {/* photo */}
                <img className="carImage" alt="car to look at - type coming soon" src={`./graphics/cars/${currentData.car.image}`}  />
                {/* make/type | owner */}
                <Row>
                    <Col md={0} sm={2} className="d-md-none"></Col>
                    <Col md={8} sm={10}>{currentData.car.make} {currentData.car.model}</Col>
                    <Col md={0} sm={2} className="d-md-none"></Col>
                    <Col md={4} sm={10}>{currentData.owner.forename} {currentData.owner.surname}</Col>
                    <Col md={0} sm={2} className="d-md-none"></Col>
                    <Col md={4} sm={10}>{currentData.owner.location}</Col>
                </Row>
                {/* yes/no */}
                <Row>
                    <Col md={1} sm={2}></Col>
                    <Col md={4} sm={8}>
                        <Button className="yesnoButton" variant="danger" onClick={() => {
                            current = (current < dataArray.length - 1 ? current + 1 : 0 );
                            console.log(current);
                            setCurrentData(dataArray[current]);
                        }}>NO</Button>
                        {/* on click run "nextCar" */}
                    </Col>
                    <Col md={1} sm={2}><Button onClick={() => {
                        getCurrent()
                    }}>test get current</Button></Col>
                    <Col md={1} sm={2}></Col>
                    <Col md={4} sm={8}>
                        <Button className="yesnoButton" variant="success" onClick={() => {
                            contactOwner();
                        }}>YES</Button>
                        {/* on click run "contactOwner" */}
                    </Col>
                    <Col md={1} sm={2}></Col>
                </Row>
            </Container>
        )
    }
    else{
        return(
            <p>
                Loading...
                <Button onClick={() => {
                    console.log(dataArray);
                    console.log(currentData.car.make);
                    setLoaded(true);
                }}>
                    output dataArray
                </Button>
            </p>
        )
    }
    
}