import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Box from "../Box/Box";
import New from "../New/New";
import "./Main.css";

export default function Main(){
    return(
        <Container className="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Box />} />
                    <Route path="new" element={<New />} />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}