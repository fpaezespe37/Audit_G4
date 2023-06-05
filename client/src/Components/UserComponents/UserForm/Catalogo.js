import React from "react";
import {CartContext} from '../UserForm/ShoppingCartContext'
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import "./UserForm.css";

const Catalogo = ({ _id, promocion,image,precio,descripcion,tipo}) => {
 
  const params = new URLSearchParams(window.location.search);
  const user = params.get("username");

  const[cart, setCart] = useContext(CartContext);

  const addCart = () =>{
    if(user){
    setCart((currItems)=>{
       const isItemsFound = currItems.find((item)=> item._id === _id);
        if(isItemsFound){
          return currItems.map((item)=>{
            if(item._id === _id){
              return {...item, quantity: item.quantity + 1};
            }else{
              return item;
            }
          });
        }else{
          return [...currItems, {_id, quantity: 1, precio: precio}]
        }
    })
  }else{
    Swal.fire({
      color: '#6c757d',
      background: '#fffbf4',
      icon:'error',
      text: 'Inicie sesion para poder añadir un producto al carrito',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#007bff',
      position:'center',
      footer: '<a href="/register/user">Registrese aquí si no tiene una cuenta </a>'
    })
  }
 };

 const removeItem =(_id)=>{
  setCart((currItems)=>{
    if(currItems.find((item) => item._id === _id)?.quantity === 1){
      return currItems.filter((item)=> item._id !== _id);
  }else{
    return currItems.map((item)=> {
      if(item._id === _id){
        return {...item, quantity: item.quantity -1}
      }else{
        return item;
      }
    })
  }
  
});
 };

 const getQuantityById = (_id)=>{
  return cart.find((item) => item._id === _id)?.quantity || 0;
 }
 const quantityPerItem = getQuantityById(_id);

  return (
    
   
     <div className="col">     
        <br></br>
            <div className="card"  style={{width: "18rem"}}>
                <img className="imgCat" src={`http://localhost:5000/${image}`}alt="imagenes"></img>
                <div className="card-body">
                    <h5 className="card-title" >{tipo}</h5>
                    <h6>{descripcion}</h6>
                    <h5>${precio} <div className="promocion">{promocion}</div> </h5> 
                    
                  {
                    quantityPerItem === 0 ? (
                      <Button variant="primary" onClick={()=>addCart()}>+Añadir al Carrito</Button> 
                   
                    ):(
                      <Button variant="primary" onClick={()=>addCart()}>+Añadir</Button> 
                    )
                  }
                  {
                    quantityPerItem > 0 && <Button variant="secondary" onClick={()=>removeItem(_id)}>-Quitar</Button> 
                  }
                </div>
            </div>
            <br></br>
        </div>

     
    
  );
};
export default Catalogo;
