"use client"

import Menu from '/public/icons/menu.svg'
import Exit from '/public/icons/exit.svg'
import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenu(props){
    const { page } = props;
    const [menuOn, setMenuOn]=useState(false);

    return(
        <div>
            <div className="menu">
                <Menu onClick={()=>setMenuOn(true)}/>
            </div>
            <div className={`mobile-menu ${menuOn ? 'menu-on' : 'menu-off'}`}>
                <Exit onClick={()=>setMenuOn(false)}/>
                <div>
                <Link href="/pages/studio">STUDIO</Link>
                <Link href="/pages/lab">LAB</Link>
                <Link href="/pages/research">RESEARCH</Link>
                <Link href="/pages/people">PEOPLE</Link>
                </div>
            </div>
        </div>
    );
}