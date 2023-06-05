import React, { useEffect, useState } from "react";
import axios from "axios";

export function CreateForm() {
  const [products, setProducts] = useState([]);
  const [promos, setPromos] = useState([]);
  const uri = "http://localhost:5000/";

  useEffect(() => {
    async function getProducts() {
      var products = [];
      let aux = (await axios.get(`${uri}tipoproducto`)).data;
      for (let i = 0; i < aux.length; i++) {
        var tipo = aux[i].tipo;
        products.push(<option>{tipo}</option>);
      }
      setProducts(products);
    }
    async function getPromos() {
      var promos = [];
      let aux = (await axios.get(`${uri}promotion`)).data;
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
    getProducts();
    getPromos();
  }, []);
  /*Envio de datos*/

  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [promocion, setPromocion] = useState("");
  const [image, setImage] = useState("");

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const tipoString = tipo.join(",");
    const formData = new FormData();
    formData.append("image", image);
    formData.append("tipo", tipoString);
    formData.append("descripcion", descripcion);
    formData.append("precio", precio);
    formData.append("promocion", promocion);
    try {
      const response = await axios.post(`${uri}producto`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      alert("Se ha registrado su producto correctamente ");
      setTipo("");
      setDescripcion("");
      setPrecio("");
      setPromocion("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container blur">
    <h2>Agregar</h2>

      <center>
        <div
          className="card text-white bg-secondary border-primary center"
          style={{ width: "20rem", height: "35rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="rendered-form">
              <div className="formbuilder-select form-group field-select-1661658959184">
                <label
                  htmlFor="select-1661658959184"
                  className="formbuilder-select-label"
                >
                  Seleccionar un producto
                  <span className="formbuilder-required">*</span>
                </label>
                <select
                  className="form-control"
                  name="select-1661658959184[]"
                  multiple="true"
                  id="select-1661658959184"
                  required="required"
                  aria-required="true"
                  value={tipo}
                  onChange = {(e) => setTipo(Array.from(e.target.selectedOptions, (option) => option.value))}
                >
                  {products};
                </select>
              </div>
              <div className="formbuilder-file form-group field-file-1661659003480">
                <label
                  htmlFor="file-1661659003480"
                  className="formbuilder-file-label"
                >
                  Subir Imagen
                </label>
                <input
                onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  className="form-control"
                  name="image"
                  access="false"
                  multiple="false"
                  id="file-1661659003480"
                />
              </div>

              <div className="formbuilder-button form-group field-button-1661661233333">
                <label
                  htmlFor="select-1661659027080"
                  className="formbuilder-select-label"
                >
                  Descripcion del producto
                </label>
                <div className="textDiv">
                  <input
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="form-control"
                    type="text"
                  ></input>
                </div>
              </div>

              <div className="formbuilder-button form-group field-button-1661661233333">
                <label
                  htmlFor="select-1661659027080"
                  className="formbuilder-select-label"
                >
                  Precio del producto ($)
                </label>
                <div className="textDiv">
                  <input
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    className="form-control"
                    type="number"
                    name="points"
                    min="0"
                    max="200"
                    step="0.01"
                  ></input>
                </div>
              </div>

              <div className="formbuilder-select form-group field-select-1661659027080">
                <label
                  htmlFor="select-1661659027080"
                  className="formbuilder-select-label"
                >
                  Seleccionar Promoción
                </label>
                <select
                  value={promocion}
                  onChange={(e) => setPromocion(e.target.value)}
                  className="form-control"
                  name="select-1661659027080"
                  id="select-1661659027080"
                
                >
                  {promos}
                </select>
              </div>

              <div className="formbuilder-button form-group field-button-1661661233333">
                <button
                  type="submit"
                  className="btn-primary btn"
                  name="button-1661661233333"
                  access="false"
                  id="button-1661661233333"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}
