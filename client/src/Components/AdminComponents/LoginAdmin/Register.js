import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css";

export function Register() {

  const [nombre, setName] = useState('');
  const [nombreusuario, setUsername] = useState('');
  const [correo, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const[role , setRole] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value);
   };

   const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
   const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user', {
      nombre,
      nombreusuario,
      correo,
      contraseña,
      role,
      });
      console.log(response.data);
      alert("Se ha registrado su datos correctamente \n Ingrese sus datos a continuación");
            window.location.href=`http://localhost:3000/micuenta`
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="containerlogin">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Registrar</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}
            >
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={handleNameChange}
                />
                
              </div>


              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={correo} 
                  onChange={handleEmailChange}
                />
                
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i class="fas fa-user-circle"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="username"
                  value={nombreusuario}
                  onChange={handleUsernameChange}
               
                />
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key" />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  value={contraseña} 
                  onChange={handlePasswordChange}
                  
                />
              </div>
              <input
               type="hidden"
                name="role"
                placeholder='user'
                value={role}
                onChange={handleRoleChange}
                 />
                 
              <div className="form-group">
                <button type="submit" className="btn float-right login_btn">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
