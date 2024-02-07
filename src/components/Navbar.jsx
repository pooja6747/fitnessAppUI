import React from 'react'
import profile from '../assets/Pooja_Ambi_Photo.ico'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
    <div className="d-flex justify-content-between mb-3">
      <div className="arrow">
      <i className="fa fa-arrow-left fa-1x"></i>
      </div>
      <div className="img">
        <img src={profile} className='rounded-circle' height={45}/>
      </div>
    </div>


    </>
  )
}

export default Navbar