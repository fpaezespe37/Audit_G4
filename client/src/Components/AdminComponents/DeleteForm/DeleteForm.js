import "./DeleteForm.css";
import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";

export const getProductos = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/catalogo`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function DeleteForm() {
  
  const [setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [bonsaiSeleccionado, setBonsaiSeleccionado] = useState({
    id: "",
    catalogo: "",
    descripcion: "",
  });
    const seleccionarBonsai = (elemento, caso) => {
      setBonsaiSeleccionado(elemento);
      caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
    };

    const eliminar = () => {
    setUsers(users.filter((bonsai) => bonsai._id !== bonsaiSeleccionado._id));
    setModalEliminar(false);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getProductos();
    setUsers(response.data);
  };

  return (
    <div className="container">
      <div className="blur">
        <h2>Eliminar Catalogo</h2><br />
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">catalogo</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elemento) => (
              <tr>
                <td>{elemento.id}</td>
                <td>{elemento.catalogo}</td>
                <td>{elemento.descripcion}</td>
                <td>
                  <button
                    className="btn btn-red"
                    onClick={() => seleccionarBonsai(elemento, "Eliminar")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el catalogo{" "}
          {bonsaiSeleccionado && bonsaiSeleccionado.catalogo}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
