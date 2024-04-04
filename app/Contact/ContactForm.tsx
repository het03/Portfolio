'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Reveal from '@/components/utils/Reveal';

import './contact.css'


export default function ContactForm(){

    async function handleSubmit(event: any) {
        event.preventDefault();
    
        const data = {
          name: String(event.target.name.value),
          email: String(event.target.email.value),
          message: String(event.target.message.value)
        };
        
        const response = await fetch('/api/route', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
    
        if (response.ok) {
          alert('Message sent!');
          event.target.name.value = "";
          event.target.email.value = "";
          event.target.message.value = "";
        } else {
          alert('Message failed to send!');
        }
      }

    return(
        <div 
        className='form-container'>
          <div className="grid-container">
            <div className="upper">
            <div className='img'>
            </div>
              <div className="contact">
                CONTACT
              </div>
            </div>

            <div className="lower">

              <form onSubmit={handleSubmit} id='form' className='form'>
                <div className='name-container'>
                    <input placeholder='NAME' type='text' id='name' name='name' autoComplete='off'minLength={3} maxLength={150} required/>
                </div>
                <div className='email-container'>
                    <input placeholder='EMAIL' type='text' id='email' name='email' autoComplete='on' minLength={5} maxLength={150} required/>
                </div>
                <div className='message-container'>
                    <input placeholder='MESSAGE' type='text' name='message' id='message' autoComplete='off'minLength={10} maxLength={1000} required />
                </div>

              <button
                type='submit' className='send-btn'>SEND
              </button>
              
              </form>
            </div>

          </div>
        </div>
    )
}