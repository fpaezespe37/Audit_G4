import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Update } from "./Vistas/AdminVistas/Update";
import { Delete } from "./Vistas/AdminVistas/Delete";
import { Create } from "./Vistas/AdminVistas/Create";
import { Inicio } from "./Vistas/UserVistas/Inicio";
import { CatalogoUser } from "./Vistas/UserVistas/CatalogoUser";
import { Mantenimiento } from "./Vistas/UserVistas/Mantenimiento";
import { Contacto } from "./Vistas/UserVistas/Contacto";
import { Micuenta } from "./Vistas/UserVistas/Micuenta";
import { Register } from "./Components/AdminComponents/LoginAdmin/Register";
import { RegisterUser } from "./Vistas/UserVistas/RegisterUsuario";
import { Error404 } from "./Components/GeneralComponents/Error404/Error404";
import { ShoppingCartProvider } from "./Components/UserComponents/UserForm/ShoppingCartContext";

function App() {
  return (
    <div className="App">
      <header className="headerLogin">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </header>
      <body>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Inicio />}></Route>
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/update" element={<Update />} />
              <Route exact path="/delete" element={<Delete />} />
              <Route exact path="/create" element={<Create />} />
              <Route exact path="/catalogo" element={<CatalogoUser />} />
              <Route
                exact
                path="/mantenimiento_y_servicio"
                element={<Mantenimiento />}
              />
              <Route exact path="/Conocenos" element={<Contacto />} />
              <Route exact path="/micuenta" element={<Micuenta />} />
              <Route exact path="/register/user" element={<RegisterUser />} />
              <Route exact path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </ShoppingCartProvider>
      </body>
    </div>
  );
}

export default App;
