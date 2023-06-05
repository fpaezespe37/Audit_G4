import { Navbar } from "../../Components/AdminComponents/Navbar/Navbar";
import { UpdateForm } from "../../Components/AdminComponents/UpdateForm/UpdateForm";
export function Update() {
  return (
    <div >
      <Navbar/>
      <div className="form">
        <UpdateForm />
      </div>
    </div>
  );
}
