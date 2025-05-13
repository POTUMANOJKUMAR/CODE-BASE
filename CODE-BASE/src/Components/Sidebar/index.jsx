import React from 'react'
import { navLinkData } from '../../Constant'
import { NavLink ,useLocation} from 'react-router-dom'
import "./styles.scss"
const SideBar=()=> {
    const location=useLocation()
    console.log(location,"location")
return (
        <div className='main_sidebar_container'>
            {navLinkData?.map(({ to, label,Icon,IconActive}, index) => {
                const isActive = location.pathname + location.search === to;
            
               return(
                <NavLink to={to} key={index}>
                <div className='sibar_Items'>
                    <img src= { !isActive ? IconActive:Icon} alt="" />
                    <p className="fs-18">{label}</p>
                </div>
            </NavLink>
               )

               
            
})}
        </div>
    )
}

export default SideBar

