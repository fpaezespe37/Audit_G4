import React from "react";
import "./UserForm.css";

const Catalogo = ({ catalogos = [] }) => {
  return (
    <div className="row">
      {catalogos.map((item, index) => (
        <div key={index} className="col">
        <br></br>
            <div className="card"  style={{width: "18rem"}}>
                <img className="imgCat" src={item.foto} alt="imagenes"></img>
                <div className="card-body">
                    <h5 className="card-title" >{item.nombre}</h5>
                    <p className="card-text"> {item.descripcion}</p>
                    <a href="https://www.facebook.com/commerce/products/bonsai-cotoneaster/4783042148411333/?ref=mini_shop_storefront&referral_code=mini_shop_profile_plus_shop_tab_cta" class="btn btn-primary">Comprar</a>
                </div>
            </div>
            <br></br>
        </div>
      ))}
    </div>
  );
};
export default Catalogo;
