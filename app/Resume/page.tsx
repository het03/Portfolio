'use client'
import React, {useEffect, useState} from 'react';
import InitialPageTransition from '@/components/utils/InitialPageTransition';
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
      <>
    <div className='resume-container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <h1>Will add shortly</h1>
    </div>
    </>
    )}
    </>
  )
}
