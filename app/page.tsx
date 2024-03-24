'use client'
import React, {useEffect, useState} from 'react';
import InitialPageTransition from '@/components/utils/InitialPageTransition';
import Navigation from "@/components/Navigation";
import Styles from './page.module.css';


export default function Home() {

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
    <Navigation />    
    )}
   </>
  );
}
