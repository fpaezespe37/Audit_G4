import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';


export function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/user');
      setUserData(result.data);
    };

    fetchData();
  }, [])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = userData.find(
      (user) => user.nombreusuario === username && user.contraseña === password
    );

    if (user) {
      if (user.role === 'admin') {
        // Redirect to admin page
        console.log('Admin login successful');
        window.location.href=`http://localhost:3000/create`
        
      } else if (user.role === '') {
        // Redirect to user page
        window.location.href=`http://localhost:3000/inicio`
        console.log('User login successful');
      }
    } else {
      alert("Contraseña o usuario incorrecto");
    }
  };

  return (
    
    <div className="containerlogin">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Iniciar Sesion</h3>
          </div>
          <div className="card-body">
            <form 
            onSubmit={handleSubmit}
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
                  placeholder="Username"
                  value={username} 
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
                  placeholder="Password"
                  value={password} 
                  onChange={handlePasswordChange}
                
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn float-right login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a href="/register">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
