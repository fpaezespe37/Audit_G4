import { NavbarUser } from "../../Components/UserComponents/UserForm/NavbarUser";
import { Footer } from "../../Components/GeneralComponents/Footer/Footer";
import Foto from '../../Assets/fondobonsai1.jpg'
import "./user.css";
export function Inicio() {
  return (
     <div className="inicio">
      <NavbarUser />
        <div className="text-left">
          <table className="eslogan">
          <tr>
          <td>
            <h3>Bonsáis en Quito</h3>
            <h1>El arte del Bonsái cerca de ti cerca de ti</h1>
            <p>
              Contamos con una amplia variedad en especies,tamaños y edades, En
              Ecuabonsai, nos especializamos en ayudarte a conseguir el que
              arbol que armonizará sus espacios
            </p>
            </td>
            <td>
            <div className="portada">
              <img  src={Foto} alt="foto" ></img>
              </div>
            </td>
            </tr>
            
            
          </table>
        </div>
        <section>
        <div className="portada">
              <img  src={Foto} alt="foto" ></img>
              </div>
         </section>
     
      <Footer />
    </div>
    
  );
}
