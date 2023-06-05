import { NavbarUser } from "../../Components/UserComponents/UserForm/NavbarUser";
import { Footer } from "../../Components/GeneralComponents/Footer/Footer";
import ImagenMant from "../../Assets/servicios.jpg";
import Servicio1 from "../../Assets/servicio1.jpg";
import Servicio2 from "../../Assets/servicio2.jpg";
import Servicio3 from "../../Assets/servicio3.jpg";
import "./user.css";
export function Mantenimiento() {
  return (
    <div className="inicio">
      <NavbarUser />
      <div className="text-left">
        <table className="eslogan">
          <tr>
            <td>
              <h1>Objetivos</h1>
              <h4>
                Entrega del producto en buen estado y con excelente actitud.
              </h4>
              <h5>
                Firmes defensores de que calidad y belleza no esta en el precio,
                sino en el producto.
              </h5>
              <h4>Exigentes en el cuidado de los arboles bonsái</h4>
              <h5>Llevamos un ambiente moderno y clasico</h5>
            </td>
            <td>
              <div className="portada">
                <img src={ImagenMant} alt="foto"></img>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <section>
      <h1>Mantenimiento para tu bonsái</h1>
        <div className="portada">
          <img src={Servicio1} alt="foto"></img>
        </div>
        <h1>Guarderia para tu bonsái</h1>
        <div className="portada">
          <img src={Servicio2} alt="foto"></img>
        </div>
        <h1>Hospital para tu bonsái</h1>
        <div className="portada">
          <img src={Servicio3} alt="foto"></img>
        </div>
      </section>

      <Footer />
    </div>
  );
}
