import { useState } from "react";
import { Button, Container, Form, FormGroup } from "react-bootstrap";
import "./New.css";

export default function New(){


    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [location, setLocation] = useState("");
    const [days, setDays] = useState({
        monday : false,
        tuesday : false,
        wednesday : false,
        thursday : false,
        friday : false
    });
    const [plate, setPlate] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");


    async function pingAPI(){

        let daysString = ""
        if(days.monday) daysString += "Monday, ";
        if(days.tuesday) daysString += "Tuesday, ";
        if(days.wednesday) daysString += "Wednesday, ";
        if(days.thursday) daysString += "Thursday, ";
        if(days.friday) daysString += "Friday, ";

        daysString = daysString.substring(0,daysString.length-2);

        //console.log(daysString);
        alert("API pinged.")
        const text=`name=${name}&number=${number}&location=${location}&plate=${plate}&make=${make}&model=${model}&days=[${daysString}]`;
        // change phoneNum to the car owner - currently set to env secret number
        await fetch(`https://adam-test-3383.twil.io/t4cnew?${text}&password=${process.env.REACT_APP_TWILIO_PASSWORD}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          });
    
        alert("Text sent! Await further messages.");/**/

        //alert(text);
    }


    return(
        <Container className="new-box">
            <Form className="forms" onSubmit={(e) => pingAPI()}>
                <FormGroup>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" required onChange={e => setName(e.target.value)}/>
                </FormGroup><FormGroup>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" required onChange={e => setNumber(e.target.value)}/>
                    <Form.Text>Must be able to receive texts</Form.Text>
                </FormGroup><FormGroup>
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="location" placeholder="Enter town/village" required onChange={e => setLocation(e.target.value)}/>
                </FormGroup><FormGroup>
                    <Form.Check type="switch" label="Monday" onChange={e => setDays((prevState) => ({
                        ...prevState,
                        monday: e.target.checked,
                    }))}/>
                    <Form.Check type="switch" label="Tuesday" onChange={e => setDays((prevState) => ({
                        ...prevState,
                        tuesday: e.target.checked,
                    }))}/>
                    <Form.Check type="switch" label="Wednesday" onChange={e => setDays((prevState) => ({
                        ...prevState,
                        wednesday: e.target.checked,
                    }))}/>
                    <Form.Check type="switch" label="Thursday" onChange={e => setDays((prevState) => ({
                        ...prevState,
                        thursday: e.target.checked,
                    }))}/>
                    <Form.Check type="switch" label="Friday" onChange={e => setDays((prevState) => ({
                        ...prevState,
                        friday: e.target.checked,
                    }))}/>
                </FormGroup>
                <hr />
                <FormGroup>
                    <Form.Label>Registration Plate</Form.Label>
                    <Form.Control type="reg-plate" placeholder="Enter registration plate" required onChange={e => setPlate(e.target.value)}/>
                    <Form.Text>Used to identify your car</Form.Text>
                </FormGroup><FormGroup>
                    <Form.Label>Make</Form.Label>
                    <Form.Control type="make" placeholder="Enter car make" required onChange={e => setMake(e.target.value)}/>
                </FormGroup><FormGroup>
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="model" placeholder="Enter car model" required onChange={e => setModel(e.target.value)}/>
                </FormGroup>
                <Button variant="success" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}