import React from 'react'
import './Body.css'

function Alert(props) {
    
    
    
  return (
    props.text && <div >
      <div className={`alert alert-warning alert-dismissible fade show `} role="alert" style={props.mystyle}>
          <strong >{props.text.type}:</strong> {props.text.message}
          
      </div>
    </div>
  )
}

export default Alert;
