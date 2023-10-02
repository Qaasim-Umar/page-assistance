import React from 'react'
import './Icon.css'
import slack from './Slack.svg'
import github from './Icon.svg'

const Icon = () => {
  return (
    <div className='icons'>

<img src={slack} className='icon' alt=''/>
<img src={github} className='icon'  alt=''/>


    </div>
  )
}

export default Icon