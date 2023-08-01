import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Formulario = () => {
  const [opcion, setOpcion] = useState("");

  return (
    <>
      <Form>
        <Form.Group controlId="genero">
          <Form.Label className="text-white">Buscar por categoria</Form.Label>
          <Form.Control
            as="select"
            value={opcion}
            onChange={(e) => setOpcion(e.target.value)}
            required
          >
            <option value="">Opciones</option>
            <option value="business">business</option>
            <option value="entertainment">entertainment</option>
            <option value="environment">environment</option>
            <option value="food">food</option>
            <option value="health">health</option>
            <option value="politics">politics</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
            <option value="top">top</option>
            <option value="tourism">tourism</option>
            <option value="world">world</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formulario;
