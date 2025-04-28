import React from 'react';
import './layout.scss';  // Make sure to import the styles

export function Authlayout(props) {
  return (
    <div className="main-authlayout">
      <div className="authlayout-container">
        <div className="image-container">
          <img src="https://cdn.pixabay.com/photo/2017/02/25/08/39/church-2097169_1280.jpg" alt="Auth image" className="auth-image" />
        </div>
        <div className="content-container">
          {props?.children}
        </div>
      </div>
    </div>
  );
}

export default Authlayout;
