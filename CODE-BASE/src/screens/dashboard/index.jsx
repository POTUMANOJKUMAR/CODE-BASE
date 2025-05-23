import { useDispatch, useSelector } from 'react-redux'
import { SetAccessToken } from '../../redux/reducers/authSlice'
import { useForm } from 'react-hook-form'
import CustomSelect from '../../Components/Common/customeSelete'
import { yupResolver } from '@hookform/resolvers/yup'
import { StatusScheme } from '../../Schemas'
import CustomeButton from '../../Components/Common/customeButton'

function Dashboard() {
  const dispatch=useDispatch()
  const userData=useSelector((state)=>state?.kitchen?.loginData)
  const {control,handleSubmit,formState:{errors}}=useForm({
    resolver: yupResolver(StatusScheme),
  })
const onsubmit=(data)=>{
  console.log(data,"data")
}
// useEffect(()=>{
// reset({status:"Inactive"})
// },[])
  return (
    <>
    <div>
<CustomSelect
  label="Status"
  name="status"
  control={control}
  error={errors.status}
  options={[
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'Inactive' },
  ]}
/>

    </div>
    <CustomSelect
  label="Status"
  name="status"
  control={control}
  error={errors.status}
  multiple={true}
  options={[
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
  ]}
/>

    
  <div onClick={()=>dispatch(SetAccessToken(null))}>{
      `welcome ${userData?.name}`}
    </div>
    <CustomeButton label={"Logout"} type={"submit"} onclick={handleSubmit(onsubmit)}/>
  </>
  )}

export default Dashboard
