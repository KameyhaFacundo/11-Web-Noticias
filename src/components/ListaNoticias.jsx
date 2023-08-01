import React from "react";
import Noticia from "./Noticia";
import { Row, Col } from "react-bootstrap";

const ListaNoticias = () => {
  return (
    <>
      <Row xs={1} lg={3} md={2} sm={3} xl={4} className="g-4">
        <Col>
          <Noticia></Noticia>
          <Noticia></Noticia>
        </Col>
      </Row>
    </>
  );
};

export default ListaNoticias;
