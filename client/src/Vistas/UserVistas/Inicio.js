import { NavbarUser } from "../../Components/UserComponents/UserForm/NavbarUser";
import { Footer } from "../../Components/GeneralComponents/Footer/Footer";
import Foto from "../../Assets/fondobonsai1.jpg";
import Foto1 from "../../Assets/inicio2foto.png";
import Foto2 from "../../Assets/inicio1foto.png";
import Foto3 from "../../Assets/inicio3foto.png";
import Foto4 from "../../Assets/inicio4foto.png";

import "./user.css";
export function Inicio() {
  return (
    <div className="inicio">
      <NavbarUser />
      <div className="text-left">
        <table className="eslogan">
          <tr>
            <td>
              <h3>Bonsáis en Quito ⌂</h3>
              <h1>El arte del Bonsái cerca de ti cerca de ti</h1>
              <p>
                Contamos con una amplia variedad en especies,tamaños y edades,
                En Ecuabonsai, nos especializamos en ayudarte a conseguir el que
                arbol que armonizará sus espacios
              </p>
            </td>
            <td>
              <div className="portada">
                <img src={Foto} alt="foto"></img>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <h2>Los mejores arboles Bonsái a su disposición</h2>
      <br />
      <section>
        <div className="portada">
          <ul id="lista1">
            <li></li>
            <li>
              <span class="separador"> </span>
              <img src={Foto1} alt="foto"></img>
            </li>
            <li>
              <span class="separador"> </span>
              <img src={Foto2} alt="foto"></img>
            </li>
            <span class="separador"> </span>
            <img src={Foto4} alt="foto"></img>
          </ul>
        </div>
      </section>
      <section>
      <div className="portada">
        <h3>Conoce nuestro catálogo Actual</h3>
        <br />
        <a href="/catalogo">
          {" "}
          <img src={Foto3} alt="foto"></img>
        </a>
        </div>
      </section>
      <br />
      <Footer />
      
    </div>
  );
}
