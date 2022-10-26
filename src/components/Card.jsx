
import React from 'react'
import Language from './Language';
import Container from "react-bootstrap/Container";
import {data} from "../helpers/data"
import  Col  from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";

const Card = () => {
    console.log(data)
  return (
    <Container className="rounded-3 p-2" style={{ background: "#f48b29" }}>
        <h1 className='text-white my-2'>Language</h1>
      <Row className="g-3 justify-content-center">        
          {data.map((lang,index) => {
            return (
              <Col sm={6} md={4} lg={3} key={index}>
                <Language {...lang} />
                {/* <Language lang={lang} /> */}
              </Col>
            );
          })}        
      </Row>
    </Container>
  );
}

export default Card