import React from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/Name.js";
import Description from "./components/Description.js";
import Price from "./components/Price.js";
import Image from "./components/Image.js";

function App() {
  const firstName = "warda"; // Use your name here

  return (
    <Container className="mt-1 ml-1">
      <div className="d-flex">
        {firstName && (
          <img
            src="/images.png"
            alt="User"
            style={{ width: "50px", marginTop: "10px" }}
          />
        )}
        <h3 className="mt-3">Hello, {firstName ? firstName : "there"}!</h3>
      </div>
      <Card style={{ width: "18rem" }} className="m-5">
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
