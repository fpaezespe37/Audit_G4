import { Dropdown } from "react-bootstrap";
import "./Navbar.css";
import Logo from "../../../Assets/logo.jpg";

export function Navbar() {
  const params = new URLSearchParams(window.location.search);
  const user = params.get("username");
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-cream">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-black" href={`/create?username=${user || ""}`}>
                  Crear
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href={`/update?username=${user || ""}`}>
                  Actualizar promocion
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-black" href={`/delete?username=${user || ""}`}>
                  Eliminar
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown ">
            <img
              className="rounded-3"
              src={Logo}
              height={70}
              width={100}
              alt="MDB Logo"
              loading="lazy"
            />
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary">
              <i className="fas fa-user-alt" /> <quote />
              {user}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/micuenta">
                {" "}
                <i class="fas fa-sign-in-alt" /> Iniciar sesión
              </Dropdown.Item>
              <Dropdown.Item href="/">
                {" "}
                <i class="fas fa-sign-out-alt" /> Cerrar sesión
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </>
  );
}
