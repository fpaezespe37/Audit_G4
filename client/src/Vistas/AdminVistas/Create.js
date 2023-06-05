import { Navbar } from "../../Components/AdminComponents/Navbar/Navbar";
import { CreateForm } from "../../Components/AdminComponents/CreateForm/CreateFrom";

export function Create() {
  return (
    <div>
      <Navbar />
      <div className="form">
        <CreateForm />
      </div>
    </div>
  );
}
