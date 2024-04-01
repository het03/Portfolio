'use client'
import React, { useEffect, useState } from 'react';
import InitialPageTransition from '@/components/utils/InitialPageTransition';
import './contact.css';
import ContactForm from './ContactForm';

export default function Contact() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 850); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <InitialPageTransition />
      {showContent && (
        <>
          <ContactForm />
        </>
      )}
    </>
  );
}
