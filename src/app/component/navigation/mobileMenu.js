"use client"

import Menu from '/public/icons/menu.svg'
import Exit from '/public/icons/exit.svg'
import QLogo from '/public/icons/qrst_logo_1.svg'
import Link from 'next/link';
import { useState } from 'react';

import { Space_Grotesk } from 'next/font/google'
const space_grotesk400 = Space_Grotesk({ weight: '400', subsets: ['latin'] });

export default function MobileMenu(props){
    const { page } = props;
    const [menuOn, setMenuOn]=useState(false);

    return(
        <div>
            <div className="menu">
                <Menu onClick={()=>setMenuOn(true)}/>
            </div>
            <div className={`mobile-menu ${menuOn ? 'menu-on' : ''}`}>
                <Exit onClick={()=>setMenuOn(false)}/>
                <div className={space_grotesk400.className}>
                    <Link href="/" onClick={()=>setMenuOn(false)}>About</Link>
                    <Link href="/pages/work" onClick={()=>setMenuOn(false)}>work</Link>
                    <Link href="/pages/service" onClick={()=>setMenuOn(false)}>service</Link>
                    <Link href="/pages/contact" onClick={()=>setMenuOn(false)}>contact</Link>
                </div>
            </div>
        </div>
    );
}