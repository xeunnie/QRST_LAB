"use client"
import { fetchContentful } from "@/app/contentful/contentful"
import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link";
import Pagination from "@/app/component/pagenation";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Lap(){

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
                        <Link href={`/pages/studiodetail/${index}`}>
                            <Image 
                                src={'https:'+studio.fields.mainImage.fields.file.url} 
                                alt="..." 
                                width={0} height={0} 
                                sizes="100vw"
                            />
                            <div className="project">
                                <div style={{fontWeight:'500'}}>{studio.fields.projectName}</div>
                                <div style={{fontWeight:'400'}}>{studio.fields.projectSubheading}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {/* <Pagination pageName="studio"/> */}
        </div>
    )
}