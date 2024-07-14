"use client"
import { fetchContentful } from "@/app/contentful/contentful"
import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import Footer from '/public/icons/footer.svg'
import Aos from "aos";
import "aos/dist/aos.css";

import { Inter } from 'next/font/google';

const inter400 = Inter({ weight: '400', subsets: ['latin'] });
const inter300 = Inter({ weight: '300', subsets: ['latin'] });

export default function Work(){

    const [studio,setStudio]=useState([]);

    useEffect(()=>{
        const getContentful = async () => {
            try {
              var data = await fetchContentful('studio');
              setStudio(data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
      
          getContentful();
    },[]);

    useEffect(()=>{
        Aos.init();
    });

    return(
        <div className="background">
            <div className="flex-wrap">
                {studio && studio.map((studio,index)=>(
                    <div className="flex-item" key={index} data-aos='fade-up'>
                        <Link href={`/pages/workdetail/${index}`}>
                            <Image 
                                src={'https:'+studio.fields.mainImage.fields.file.url} 
                                alt="..." 
                                width={0} height={0} 
                                sizes="100vw"
                            />
                            <div className="project">
                                <div className={inter400.className}>{studio.fields.projectName}</div>
                                <div className={inter300.className}>{studio.fields.projectSubheading}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="footer">
                <Footer/>
            </div>
            {/* <Pagination pageName="studio"/> */}
        </div>
    )
}