import React from 'react'
import './Contact.css'
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
    <div className='contact-card'>
        <div className="form-card">
        <h1> Contact Me</h1>
        <p className='paragraph'>Hi there, contact me to ask me about anything you have in mind </p>
<form>
    <div className="name-card">
    <div className='name'>
<label for="First-name">First Name</label>
<input type="text" name="name" id="first_name" placeholder="Enter your first name" required="true"/>
</div>

<div className='lastname'>
<label for="Last-name">Last name</label>
<input type="text" name="name" id="last_name" placeholder="Enter your last name" required="true"/>
</div>
</div>

<div className='email'>
<label for="email-address">Email</label>
<input type="email" name="_replyto" id="email" placeholder="yourname@email.com" required="true"/>
</div>
<div className='message'>
<label for="message">Message</label>
<input type="textarea" name="text" id="message" placeholder="send me a message and i'll reply to you as soon as possible... " required="true"/>
</div>
<label className="checkbox" >   
    <input type='checkbox'/>
    <span id='tick'></span> <p className='agreement'>You agree to providing your data to &#123; name &#125;</p> 

    </label>

        <input type='submit' id='btn__submit' value='Send Message' />  

</form>





</div>
<Footer id='contact-footer'/>
    </div>
  )
}

export default Contact