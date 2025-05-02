import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../Components/Common/customeInput';
import CustomeButton from '../../Components/Common/customeButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../../Schemas';
import { login } from '../../services';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch=useDispatch()
  const { handleSubmit,register, formState: { errors } } = useForm(
    {
      resolver: yupResolver(formSchema),
    mode:"onChange"
     }
  )
  const navigate = useNavigate()
  const onsubmit =() => {
    login(dispatch)
    .then((res) => {
      // dispatch(SetLoginData(res?.data));
      // dispatch(SetAccessToken(res?.data?.access_token));
      console.log(res, "ressss");
        navigate("/main/dashboard")
     
    })
    .catch((err) => {
      console.error("Login failed", err);
    });
   
  }

  return (
       <form className="auth-form" onSubmit={handleSubmit(onsubmit)}>
          <div className="form-field">
            <CustomInput register={register}  error={errors.email} name={"email"} label={"Email"} placeholder={"Email"} icon={false} iconPosition='right'  />
          </div>

          <div className="form-field">
            <CustomInput label={"passward"} error={errors.password} register={register} name={"password"} placeholder={"Password"} icon={false} iconPosition='left' />
          </div>
          <div>
          <CustomeButton type="submit" label={"Login"} variant='primary' />
          <p onClick={() => navigate("/auth/forgetpassward")} className="m-2">Forgot Password?</p>
          <p onClick={() => navigate("/auth/register")} className="m-2">Don't have an account? Register</p>
          </div>
       </form>
    
  );
}





export default Login;
