// "use client"
// import { useState, useEffect } from "react";
import Detail from "@/app/component/workdetail/detail";
import Image from "next/image";
import { fetchContentful } from "@/app/contentful/contentful";
import ProjectInfo from "@/app/component//workdetail/projectInfo";
import Link from "next/link";
import { Inter } from 'next/font/google';
import MovePage from "@/app/component/workdetail/movepage";

const inter600 = Inter({ weight: '600', subsets: ['latin'] });

export default async function Workdetail(props){
    const id = parseInt(props.params.id);

    const data = await fetchContentful('studio');
    const length = data.length;
    const studio = data[id].fields;

    return(
        <div className="detail-back">
            <div className="detail-side">
                <div className={`projectName ${inter600.className}`} >{studio.projectName}</div>
            </div>
            <div className="mainImage">
                <Image 
                    alt="..."
                    src={"/sample.png"} 
                    width={0} height={0}
                    sizes="100vw"
                />
            </div>
            <div className="detail-side">
                <ProjectInfo id={id}/>
                <Detail id={id}/>
                <MovePage id={id} length={length}/>
            </div>
        </div>
    )
}