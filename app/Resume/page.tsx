'use client'
import React, {useEffect, useState} from 'react';
import InitialPageTransition from '@/components/utils/InitialPageTransition';
import { PDFViewer } from '@react-pdf/renderer';
import './resume.css'

export default function Resume() {

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
      <div className='resume-container'>
        <div className="resume-heading">
          <div className='resume-title'>RESUME</div>
        </div>
        <h1>will add shortly</h1>
    </div>
    )}
    </>
  )
}
