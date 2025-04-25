import React from 'react'
import ExportedData from '../../../public'
import "./styles.scss"

function Header() {
    return (
        <>
            <div className='main_header_container'>
                <div className='path'>
                   <img src={ExportedData?.headerIcons?.mainLogo} alt="" />
                </div>
                <div className='right_header_container'>
                    <div className="header_inputBox"><input  type='text' placeholder="Search for something"></input></div>
                    <div><img src={ExportedData?.headerIcons?.headerSettingsIcon} alt="" /></div>
                    <div><img src={ExportedData?.headerIcons?.NotificationIcon} alt="" /></div>
                    <div><img src={ExportedData?.headerIcons?.profileLogo} alt="" />
                    </div>
                </div>

          
            </div>
        </>
    )
}

export default Header
