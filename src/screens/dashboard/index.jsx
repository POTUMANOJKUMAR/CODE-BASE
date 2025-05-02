import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {
  const userData=useSelector((state)=>state?.authSlice?.loginData)
  console.log(userData,"userData")
  return (
    <div>{
      `welcome ${userData?.user?.name}`}
    </div>
  ) 
}

export default Dashboard
