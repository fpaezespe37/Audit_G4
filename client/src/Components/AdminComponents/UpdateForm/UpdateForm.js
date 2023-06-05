import "./UpdateForm.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";

export const getProductos = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/producto`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function UpdateForm() {

  const [promos, setPromos] = useState([]);
  useEffect(() => {
    
    async function getPromos() {
      var promos = [];
      let aux = (await axios.get("http://localhost:5000/promotion")).data;
      for (let i = 0; i < aux.length; i++) {
        var promo = aux[i].descuento;
        if (promo !== 'ninguna') {
          promos.push(<option>{promo}</option>);
        } else {
          promos.push(<option value=""></option>);
        }
      }
      setPromos(promos);
    }
       getPromos();
  }, []);

 

  const [modalEditar, setModalEditar] = useState(false);
  const [bonsaiSeleccionado, setBonsaiSeleccionado] = useState({
    _id: "",
    tipo: "",
    descripcion: "",
    image: "",
    promocion: "",
  });

  const seleccionarBonsai = (elemento, caso) => {
      setBonsaiSeleccionado(elemento)
    setBonsaiSeleccionado(elemento);
    setModalEditar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBonsaiSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


   const editar = async () => {
    const updatedProducto = {
      tipo: bonsaiSeleccionado.tipo,
      descripcion: bonsaiSeleccionado.descripcion,
      promocion: bonsaiSeleccionado.promocion
    };
    try {
      await axios.put(`http://localhost:5000/producto/${bonsaiSeleccionado._id}`, updatedProducto);
    
      catalogos.map((bonsai) => {
        if (bonsai._id === bonsaiSeleccionado._id) {
          bonsai.tipo = bonsaiSeleccionado.tipo;
          bonsai.descripcion = bonsaiSeleccionado.descripcion;
          bonsai.promocion = bonsaiSeleccionado.promocion;
         
        }
      return null;
      }); 
      setCatalogos(catalogos);
      setModalEditar(false);
    } catch (error) {
      console.error(error);
    }
  };
  

  const [catalogos, setCatalogos] = useState([]);

  useEffect(() => {
    getAllCatalogos();
  }, []);

  const getAllCatalogos = async () => {
    let response = await getProductos();
    setCatalogos(response.data);
  };

  return (
    <div className="container blur">
      
        <h2 className="tittle">Actualizar </h2>
        <br />
        <table className="table table-color">
          <thead >
            <tr>
              <th  scope="col">ID</th>
              <th  scope="col">Producto</th>
              <th  scope="col">Imagen</th>
              <th  scope="col">Descripción</th>
              <th  scope="col">Precio</th>
              <th scope="col">Promoción</th>
              <th  scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {catalogos.map((elemento) => (
              <tr>
                <td>{elemento._id}</td>
                <td>{elemento.tipo}</td>
                <td><img className="imagenArbol" src={`http://localhost:5000/${elemento.image}`} alt="arbolimagen"></img></td>
                <td>{elemento.descripcion}</td>
                <td>${elemento.precio}</td>
                <td>{elemento.promocion}</td>
                <td>
                  <button
                    className="btn btn-naranja"
                    onClick={() => seleccionarBonsai(elemento, "Editar")}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={bonsaiSeleccionado && bonsaiSeleccionado._id}
            />
            <br />

            <label>Producto</label>
            <input
              className="form-control"
              type="text"
              name="especie"
              value={bonsaiSeleccionado && bonsaiSeleccionado.tipo}
              onChange={handleChange}
            />
            <br />

            <label>Descripcion</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={bonsaiSeleccionado && bonsaiSeleccionado.descripcion}
              onChange={handleChange}
            />
            <br />

            <br />
            <label>Promocion</label>
            <select
              className="form-control"
              type="text"
              name="promocion"
              value={bonsaiSeleccionado && bonsaiSeleccionado.promocion}
              onChange={handleChange}
            >
              {promos}
            </select>

            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
