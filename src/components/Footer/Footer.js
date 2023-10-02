import React from 'react'
import './Footer.css'
import Zuri from './Zuri.Internship_Logo.png'
import i4g from './I4G.png'

const Footer = ({id}) => {
  return (
    
    <div className='footer 'id={id}>


<img src={Zuri} className="zuri" alt=''/>
<p className='credit'>HNG Internship 9 FrontEnd Task </p>
<img src={i4g}  className="i4g" alt=''/>

    </div>
  )
}

export default Footer