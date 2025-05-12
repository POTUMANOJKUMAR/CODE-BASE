import React from 'react'
import { login } from '../../services'

function Services() {
  return (
    <div onClick={()=>login()}>
      service
    </div>
  )
}

export default Services
