import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${PizzaLeft})`}}>

        </div>
        <div className="rightSide">
            <h1>CONTACT US</h1>

            <form action=""id='contact-form' method="POST">
                <label htmlFor="name"> Full Name</label>
                <input type="text" placeholder='Enter full name'name='name' />
                <label htmlFor="email"> Email</label>
                <input type="email" placeholder='Email'name='email' />
                <label htmlFor="message">Message</label>
               <textarea name="message" id="" cols="" rows="6" placeholder='Enter message...'>

               </textarea>
               <button type='submit'>Send Message</button>

            </form>
        </div>
    </div>
  )
}

export default Contact;