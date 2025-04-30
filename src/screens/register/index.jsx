
  import React from 'react'
  import './styles.scss';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../Components/Common/customeInput';
import CustomeButton from '../../Components/Common/customeButton';
  

  function Register() {
    const navigate=useNavigate()
 return (
  
   
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
      <div>
      <CustomeButton label={"Register"} variant='secondary'/>
      <p onClick={()=>navigate("/auth/login")} className="m-2">Already have an account? Login</p>
      </div>
     
    </form>
     
    )
  }
  
  export default Register
  