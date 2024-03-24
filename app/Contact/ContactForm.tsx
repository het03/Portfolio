'use client'

import React from 'react'
import { motion } from 'framer-motion'
import './contact.css'
import Reveal from '@/components/utils/Reveal';


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
        <motion.div 
        className='form-container'>
            <form onSubmit={handleSubmit} id='form'>
            <motion.div 
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.7, delay: 0.3}}
            className='inner-form'>
            <div className='name-container'>
                <input placeholder='NAME' type='text' id='name' name='name' autoComplete='off'minLength={3} maxLength={150} required/>
            </div>
            <div className='email-container'>
                <input placeholder='EMAIL' type='text' id='email' name='email' autoComplete='on' minLength={5} maxLength={150} required/>
            </div>
            <div className='message-container'>
                <input placeholder='MESSAGE' type='text' name='message' id='message' autoComplete='off'minLength={10} maxLength={1000} required />
            </div>
            </motion.div>
            <motion.button
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 0.7, delay: 0.3}}
              type='submit' className='send-btn'>SEND</motion.button>
            </form>
        </motion.div>
    )
}