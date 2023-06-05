import { NavbarUser } from "../../Components/UserComponents/UserForm/NavbarUser";
import {LoginUser} from "../../Components/UserComponents/LoginUser/LoginUser"
import { Footer } from "../../Components/GeneralComponents/Footer/Footer";
export function Micuenta() {
  return (
    <div className="inicio" >
    <NavbarUser />
    <div className="registerPropaganda">
      <p>¿Ya tienes cuenta? Haz clic en este botón e introduce tus datos de usuario y continua con tu compra.</p>
      </div>
      <div className="register">
          <LoginUser/>
        </div>
       <Footer/>
    </div>
  );
}