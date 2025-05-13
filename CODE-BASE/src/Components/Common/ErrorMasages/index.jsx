import React from 'react'
import "./styles.scss"
const ErrorMessage = ({ messages }) => {

return (
    <p className='text-danger form_error'>
      {messages ? messages : ''}
    </p>
  );
};

export default ErrorMessage
