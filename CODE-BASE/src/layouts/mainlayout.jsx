import React, { useState } from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/Sidebar'
import "./layout.scss"
import { createTheme, ThemeProvider } from '@mui/material';
export function Mainlayout(props) {

  const [theme, setTheme] = useState({
    palette: {
      primary: {
        main: "#101010",
      },
      secondary: {
        main: "#FBFBFB",
      },
      paginatePrimary: {
        main: "#2899cb",
      },
    },
  });
  const muiTheme = createTheme(theme, {
    setTheme,
  });
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <div className='main_container'>
          <div className='header-container'>
            <Header />
          </div>
          <div className='sidbar_and_maincontent'>

            <SideBar />


            <main id='main' className='children-container'>
              {props.children}
            </main>
          </div>

        </div>
      </ThemeProvider>

    </>

  )
}

export default Mainlayout
