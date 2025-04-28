import React  from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
 const navigate=useNavigate()
 
  return (
    <div className="auth-container">
    <div className='form-container'>
    <form className="auth-form">
    <div className="form-field">
    <CustomInput label={"Email"}/>
    </div>
    
    <div className="form-field">
    <CustomInput label={"PassWord"}/>
    </div>
    <button type="submit">Login</button>
    <p onClick={()=>navigate("/auth/forgetpassward")} className="link">Forgot Password?</p>
    <p onClick={()=>navigate("/auth/register")} className="link">Don't have an account? Register</p>
  </form>
    </div>
   
    </div>
  );
}





export default Login;
