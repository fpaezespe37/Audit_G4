import React, { useEffect, useState } from "react";
import axios from "axios";

export function CreateForm() {
  const [products, setProducts] = useState([]);
  const [promos, setPromos] = useState([]);
  const uri = "http://localhost:5000/";

  useEffect(() => {
    async function getProducts() {
      var products = [];
      let aux = (await axios.get(`${uri}producto`)).data;
      for (let i = 0; i < aux.length; i++) {
        var especie = aux[i].especie;
        products.push(<option>{especie}</option>);
      }
      setProducts(products);
    }
    async function getPromos() {
      var promos = [];
      let aux =  (await axios.get(`${uri}promotion`)).data;
      for (let i = 0; i < aux.length; i++) {
        var promo = aux[i].descuento;
        promos.push(<option>{promo}</option>);
      }
      setPromos(promos);
    }
    getProducts();
    getPromos();
  }, []);
  const handleClick = () => {
    
  alert("El producto se ha ingresado correctamente");
  }

  return (
    <div className="container blur">
      <center>
        <div
          className="card text-white bg-secondary border-primary center"
          style={{ width: "20rem",  height:"30rem"}}
        >
        <form  >
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
                type="file"
                className="form-control"
                name="file-1661659003480"
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
              <input className="form-control" type="text" >

              </input>
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
                className="form-control"
                name="select-1661659027080"
                id="select-1661659027080"
              >
                {promos}
              </select>
            </div>
            
         
            

            <div className="formbuilder-button form-group field-button-1661661233333">
              <button
                type="button"
                className="btn-primary btn"
                name="button-1661661233333"
                access="false"
                style={{}}
                id="button-1661661233333"
                onClick={handleClick}
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
