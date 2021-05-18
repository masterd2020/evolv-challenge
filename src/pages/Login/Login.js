import React from "react";
import "./Login.css";
import {useGlobalContext} from "../../context/AppContext";
import {Redirect} from "react-router-dom"

const Login = () => {
  const {dispatch, state, fullName, setFullName, admin, setAdmin} = useGlobalContext();
  
  const login = () => {
    if(fullName.length === 0) {
      alert("please provide the fullName field");
      return;
    }
    
    dispatch({type: "LOGIN", payload: {fullName, admin}});
    
    // Welcome message
    alert(`Welcome back ${fullName}, you just logged in as admin`);
    
    setFullName("");
    setAdmin(false);
    
  };
  
  return (
    <div className="login__container">
      {
        state.user.isAdmin && <Redirect to="/admin" />
      }
      <h3>Login</h3>
      <div className="login__wrapper">
        <label>Fullname</label><br />
        <input type="text" placeholder="Fullname" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div className="login__checkbox">
        <input type="checkbox" value={admin} onClick={() => setAdmin(!admin)}/> login as admin
      </div>
      <div className="login__button">
        <button onClick={() => login()}>Login</button>
      </div>
    </div>
  );
}

export default Login;