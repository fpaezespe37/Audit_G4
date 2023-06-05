import axios from "axios";
import React, {useState} from "react";

export function guardarProducto(especie,imagen,promo){
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
  
}