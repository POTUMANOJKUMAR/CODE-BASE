
import React from 'react'
import "./styles.scss"
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../Components/Common/customeInput'
import CustomeButton from '../../Components/Common/customeButton'


function ForgetPassword() {
  const navigate = useNavigate()
  return (


    <form className="auth-form">
      <div className="form-field">
        <CustomInput label={"Email"} />
      </div>
      <div>
        <CustomeButton label={"Submit"} variant='primary' />
        <p onClick={() => navigate("/auth/login")} className="m-2">Already have an account? Login</p>
      </div>

    </form>

  )
}

export default ForgetPassword
