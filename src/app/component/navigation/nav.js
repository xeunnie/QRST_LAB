"use client"

import Link from 'next/link'
import { useState } from 'react';
import { Space_Grotesk } from 'next/font/google'

const space_grotesk600 = Space_Grotesk({ weight: '600', subsets: ['latin'] });

export default function Nav(){

  const [activeButton, setActiveButton] = useState('');

  const clickNavButton=(buttomName)=>{
    setActiveButton(buttomName);
  }

    return(
        <div>
          <header>
            <nav className={`${space_grotesk600.className} nav-bar`}>
              <Link href="/" 
                className={activeButton==='active' ? 'active':''}
                onClick={()=>clickNavButton('active')}>
                  about
              </Link>
              <Link href="/pages/work" 
                className={activeButton==='work' ? 'active':''}
                onClick={()=>clickNavButton('work')}>
                  work
              </Link>
              <Link href="/pages/service" 
                className={activeButton==='service' ? 'active':''}
                onClick={()=>clickNavButton('service')}>
                  service
              </Link>
              <Link href="/pages/contact" 
                className={activeButton==='contact' ? 'active':''}
                onClick={()=>clickNavButton('contact')}>
                  contact
              </Link>
            </nav>
          </header>
        </div>
    );
}