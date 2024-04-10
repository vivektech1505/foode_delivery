import React from 'react'
import '../App.css'

function Header(props) {
  return (
    <div>
        <div className='navBar'>
                <div onClick={()=> props.handleShow(false)}>Home</div>
                <div onClick={()=> props.handleShow(true)} style={{color : "white"}}>Favorites</div>
                {props.count > 0 && <span style={{ color: "blue" }}>({props.count})</span>}
            </div>
    </div>
  )
}

export default Header