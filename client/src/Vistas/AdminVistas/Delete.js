import { DeleteForm } from "../../Components/AdminComponents/DeleteForm/DeleteForm";
import { Navbar } from "../../Components/AdminComponents/Navbar/Navbar";
export function Delete() {
  return (
    <div>
      <Navbar />
      <div className="form">
        <DeleteForm />
      </div>
    </div>
  );
}
