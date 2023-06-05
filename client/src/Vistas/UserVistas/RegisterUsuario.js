import { NavbarUser } from "../../Components/UserComponents/UserForm/NavbarUser";
import { Register } from "../../Components/AdminComponents/LoginAdmin/Register";
import { Footer } from "../../Components/GeneralComponents/Footer/Footer";
import './user.css'

export function RegisterUser() {
  return (
    <div className="inicio">
      <NavbarUser />
      <div className="registerPropaganda">
      <p>¿No tienes cuenta? Haz clic en este botón para crearte una nueva cuenta y guardar todas tus preferencias y poder ver el listado de tus pedidos.</p>
      </div>
      <div className="register">
          <Register />
        </div>
      <Footer />
    </div>
  );
}
