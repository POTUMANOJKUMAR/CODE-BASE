import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetAccessToken } from '../../redux/reducers/authSlice'

function Dashboard() {
  const dispatch=useDispatch()
  const userData=useSelector((state)=>state?.kitchen?.loginData
)

  console.log(userData,"userData")
  return (
    <div onClick={()=>dispatch(SetAccessToken(null))}>{
      `welcome ${userData?.name}`}
    </div>
  ) 
}

export default Dashboard
