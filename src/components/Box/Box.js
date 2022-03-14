import React, { useEffect, useState } from "react";
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
        "number" : "undefined",
        "location" : "undefined",
        "days" : ["undefined"]
    }
}


var current = 0;

// function getCurrent(){
//     console.log(current);
// }



export default function Box(){
    async function importData(){
        // ../TinderForCarsPrivate/p.d.j
        /* const fetchedData = */ await fetch("./data.json")
        .then(res => res.json())
        .then(data => dataArray = data);
        if(dataArray.length > 0 ) setCurrentData(dataArray[0]);
        console.log(currentData.owner.days);
        setLoaded(true);
        console.log("fetching");
    }
    
    useEffect(() => {
        
        importData();
        
        //console.log(process.env.REACT_APP_DEFAULT_PHONE_NUMBER);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // use twilio function as api to send text
    async function contactOwner(){
        // use twilio to send a text somehow?
        
        var phoneNum = window.prompt("enter your phone num (entire +447624xxxxxx or equivalent)");
        var name = window.prompt("enter your name");
    
        if(phoneNum==="" || name==="" || phoneNum==null || name==null){
            alert("missing field. Try again");
        }else{
            //const phoneNum = "+447624420298";
            const text=`${name} at ${phoneNum}.`;
            /*const response = await fetch(`https://adam-test-3383.twil.io/tinderforcars?text=${text}&number=${process.env.REACT_APP_DEFAULT_PHONE_NUMBER}`*/await fetch(`https://adam-test-3383.twil.io/tinderforcars?text=${text}&plate=${currentData.car.plate}&password=${process.env.REACT_APP_TWILIO_PASSWORD}`, {
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
        
    }

    const [loaded, setLoaded] = useState(false);
    const [currentData, setCurrentData] = useState(missingData);
    if(loaded){
        return(
            <Container className="box">
                {/* photo */}
                <div className="carImageDiv">
                    {/* <img className="carImage" alt={`car to look at - ${currentData.car.make} ${currentData.car.model}`} src={`./graphics/cars/${currentData.car.image}`}  /> */}

                    <Row>
                        <Col md={0} sm={2} className="d-md-none"></Col>
                        <Col md={8} sm={10}>{currentData.car.make} {currentData.car.model}</Col>
                        <Col md={0} sm={2} className="d-md-none"></Col>
                        <Col md={8} sm={10}><ul>{currentData.owner.days.map(element => (
                            <li key={element}>{element.toString()} </li>
                        ))}</ul></Col>
                        <Col md={0} sm={2} className="d-md-none"></Col>
                        <Col md={4} sm={10}>From {currentData.owner.location}</Col>
                    </Row>

                </div>
                {/* make/type | owner */}
                
                {/* yes/no */}
                <Row>
                    <Col md={1} sm={2} className="d-xs-none"></Col>
                    <Col md={4} sm={8} xs={5} className="nopadding">
                        <Button className="yesnoButton" variant="danger" onClick={() => {
                            current = (current < dataArray.length - 1 ? current + 1 : 0 );
                            console.log(current);
                            setCurrentData(dataArray[current]);
                        }}>NO</Button>
                        {/* on click run "nextCar" */}
                    </Col>
                    <Col md={1} sm={2} className="d-xs-none">{/*<Button onClick={() => {
                        getCurrent()
                    }}>test get current</Button>*/}</Col>
                    <Col md={1} sm={2} className="d-xs-none"></Col>
                    <Col md={4} sm={8} xs={5} className="nopadding">
                        <Button className="yesnoButton" variant="success" onClick={() => {
                            contactOwner();
                        }}>YES</Button>
                        {/* on click run "contactOwner" */}
                    </Col>
                    <Col md={1} sm={2} xs={1}></Col>
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
                    Attempt to load
                </Button>
            </p>
        )
    }
    
}