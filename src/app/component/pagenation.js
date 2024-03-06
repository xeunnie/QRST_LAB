"use client"
import Up from '/public/icons/up.svg'
import Down from '/public/icons/down.svg'
import Home from '/public/icons/home.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Pagination({pageName}){

    const [isUpVisible, setIsUpVisible] = useState(false);
    const [isDownVisible, setIsDownVisible] = useState(true);

    useEffect(() => {
        const handleScroll = (event) => {
            setIsUpVisible(window.scrollY !== 0);
            setIsDownVisible(window.scrollY !== document.body.scrollHeight - window.innerHeight);
            // console.log(document.body.scrollHeight - window.innerHeight === window.scrollY);
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
        window.removeEventListener('wheel', handleScroll);
        };
        
  }, []);


  const handleScrollUp= () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsUpVisible(false);
      setIsDownVisible(true);
    }
  };

  const handleScrollDown= () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top : document.body.scrollHeight,
        behavior: 'smooth'
      });
      setIsDownVisible(false);
      setIsUpVisible(true);
    }
  };
    return(
        <div className='pagination'>
            <div className='title'><Link href={`/pages/${pageName}`}>{pageName}</Link></div>
            <div className='icon-wrap'>
                <Link href="/"><Home/></Link>
                <span
                    className={isUpVisible ? 'visible' : 'invisible'}
                    onClick={handleScrollUp}
                ><Up/></span>
                <span
                    className={isDownVisible ? 'visible' : 'invisible'}
                    onClick={handleScrollDown}
                ><Down/></span>
            </div>
        </div>
    )
}