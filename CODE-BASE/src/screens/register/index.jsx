
import React from 'react'
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../Components/Common/customeInput';
import CustomeButton from '../../Components/Common/customeButton';
import { useForm } from 'react-hook-form';
import { registerApi } from '../../services';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from '../../Schemas';

function Register() {
  const { handleSubmit, register, formState:{errors} } = useForm({
    resolver: yupResolver(registerFormSchema),
    mode: "onChange"
  })
  const navigate = useNavigate()
  const onRegister = async (data) => {
   
    await registerApi(data).then((res) => console.log(res))
  }
  return (


    <form className="auth-form" onSubmit={handleSubmit(onRegister)}>
      <div className="form-field">
        <CustomInput register={register} error={errors?.email} name={"email"} label={"Email"} placeholder={"Email"} />
        
      </div>
      <div className="form-field">
        <CustomInput label={"Password"} register={register} name={"password"} error={errors?.password} placeholder={"Password"} />
      </div>
      <div className="form-field">
        <CustomInput
          label={"Confirm Password"}
          register={register}
          name={"conPass"}
          error={errors?.conPass}
          placeholder={"Confirm Password"}
        />
      </div>
      <div>
        <CustomeButton label={"Register"} variant='secondary' type={"submit"} />
        <p onClick={() => navigate("/auth/login")} className="m-2">Already have an account? Login</p>
      </div>

    </form>

  )
}

export default Register
