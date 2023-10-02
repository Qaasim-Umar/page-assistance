import React from 'react'
import './Index.css'
import Header from '../../components/Header/Header';
import Tolink from '../../components/Tolink/Tolink';
import Footer from '../../components/Footer/Footer';
import Icon from '../../components/Icon/Icon';
import { useState } from 'react';
import gif from '../../components/Header/welcome.gif'



import { Link } from 'react-router-dom';

const Index = () => {

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>

<Header />
      <Tolink  name='slack' link='' id='slack' />
      <Tolink name='Twitter Link' link='https://twitter.com/i_codejs?t=Yh-mkuhJsgVyh8uZdoC8sg&s=09'  id='twitter' />
      <Tolink name='Zuri Team' link='https://training.zuri.team/' id='btn_zuri' />
      <Tolink name='Zuri Books' link='http://books.zuri.team ' id='books' />
      <Tolink
        name='Python Books'
        link='https://books.zuri.team/'
        id='book__python'
      />
      <Tolink
        name='Background Check for Coders'
        link='https://background.zuri.team '
        id='pitch'
      />
      <Tolink
        name='Design Books'
        link='https://books.zuri.team/design-rules'
        id='book__design'
      />
   
  
   <Link to = '/Contact'> <Tolink
        name='Contact Me'
        link=' '
        id='contact'
      /></Link> 


<div
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Hover me
      {isHovered && (
        <div className="tooltip">
          <img src={gif} className='img' alt="GIF" />
        </div>
      )}
    </div>
      <Icon />
      <Footer />

    </div>
  )
}

export default Index