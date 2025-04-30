import React from 'react'
import ExportedData from '../../../public'
import "./styles.scss"
import CustomInput from '../Common/customeInput'

function Header() {
    return (
        <>
            <div className='main_header_container'>
                <div className='path'>
                   <img src={ExportedData?.headerIcons?.mainLogo} alt="" />
                </div>
                <div className='right_header_container'>
                    {/* <div className="header_inputBox"><CustomInput icon={true} isSerchIcon={true}  iconPosition='left' placeholder={"Search Something"}/></div> */}
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
