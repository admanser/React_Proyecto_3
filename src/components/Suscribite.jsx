import { React, useState, useEffect } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import {Button} from "react-bootstrap"

const Suscribite = () => {
  const [modal, setModal] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setModal("visible");
    }, 500);
    setTimeout(() => {
      setModal("hidden");
    }, 5000);
  }, []);

  return (
    <div style={{ visibility: modal }} className="modal d-none d-md-flex">
      <div className="contenido">
        <div className="fondito d-flex justify-centent-center align-items-center">
          <Button variant="danger lg" className="btn-lg"> Suscribete!</Button>
          <CloseButton
            onClick={() => {
              setModal("hidden");
            }}
            variant="white"
            className="btn-close"
          />
        </div>
      </div>
    </div>
  );
};

export default Suscribite;