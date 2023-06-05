import { NavbarUser } from "../../Components/UserComponents/UserForm/NavbarUser";
import { UserForm } from "../../Components/UserComponents/UserForm/UserForm";
import {Footer} from "../../Components/GeneralComponents/Footer/Footer";
import "./user.css";

export function CatalogoUser() {
  return (
    <div className="inicio">
    
    <NavbarUser />
    <br/>
      <div className="form">
      
        <UserForm />
      </div>
      <br/>
      <Footer/>
    </div>
  );
}