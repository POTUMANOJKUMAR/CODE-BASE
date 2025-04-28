
  import React from 'react'
  import './styles.scss';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../Components/Common/customeInput';
  

  function Register() {
    const navigate=useNavigate()
 return (
   <div>
          <form className="auth-form">
      <div className="form-field">
      <CustomInput label={"Email"}/>
      </div>
      <div className="form-field">
      <CustomInput label={"Password"}/>
      </div>
      <div className="form-field">
      <CustomInput label={"Confirm Passward"}/>
      </div>
      <button type="submit">Register</button>
      <p onClick={()=>navigate("/auth/login")} className="link">Already have an account? Login</p>
    </form>
      </div>
    )
  }
  
  export default Register
  