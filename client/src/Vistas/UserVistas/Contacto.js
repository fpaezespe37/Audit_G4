import { NavbarUser } from "../../Components/UserComponents/UserForm/NavbarUser";
import { Footer } from "../../Components/GeneralComponents/Footer/Footer";
import "./user.css";
import Foto1 from "../../Assets/bonsai1.png";
import Foto2 from "../../Assets/inicio2foto.png";
import Foto3 from "../../Assets/bonsai3.png";
import Foto4 from "../../Assets/bonsai2.png";
import Foto5 from "../../Assets/Fundador.jpg";

export function Contacto() {
  return (
    <div className="inicio">
      <NavbarUser />
      <br></br>
      <br/>
      <h3> Bonsáis únicos en el Ecuador🎋</h3>
      <br></br>
      <section className="menu">
        <div className="columna">
          <div className="foto">
            <img src={Foto1} alt="foto1" />
          </div>
          <div className="foto">
            <img src={Foto3} alt="foto2" />
          </div>
          <div className="foto">
            <img src={Foto2} alt="foto3" />
          </div>
        </div>
      </section>
      <section>
        <h1> Ecuabonsai</h1>
        <p>
          {" "}
          Somos una empresa con el objetivo de acercar la naturaleza al hombre,
          consientes que cuidar de un bonsai es mucho mas{" "}
        </p>
        <br></br>
        <div className="Ecuabonsai">
          <img src={Foto4} alt="foto4" />
        </div>
        <br></br>
      </section>
      <section>
        <h1> Su fundador</h1>
        <div className="parrafo"> 
        <p>
          {" "}
          A Luis Chandi le apasionó el arte en miniatura cuando tenía 15 años. A esa
          edad empezó a practicar artes marciales en una academia ubicada en el
          norte de Quito. Fue este maestro de origen japonés quien le recomendó
          dedicarse a este oficio. No dudaba en ayudarle tanto con el cuidado de
          los arbustos y el jardín. “Al maestro le parecía perfecto el clima del
          Ecuador para cultivar bonsái; nos llamaba el país de la eterna
          primavera”. Fuente: Diario EL TELEGRAFO{" "}
        </p>
        <br></br>
        </div>
        <div className="Ecuabonsai">
          <img src={Foto5} alt="foto5" />
        </div>
        <br></br>
      </section>

      <Footer />
    </div>
  );
}
