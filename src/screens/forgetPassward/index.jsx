
import React from 'react'
import "./styles.scss"
import { useNavigate } from 'react-router-dom'


function ForgetPassword() {
      const navigate=useNavigate()
  return (

    <div className="auth-container">
      <div className='form-container'>
        <form className="auth-form">
          <div className="form-field">
          <CustomInput label={"Email"}/>
          </div>

          <button type="submit">Send Email</button>
          <p onClick={()=>navigate("/auth/login")} className="link">Already have an account? Login</p>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
