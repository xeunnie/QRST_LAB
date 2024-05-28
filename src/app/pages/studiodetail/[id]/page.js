// "use client"
// import { useState, useEffect } from "react";
import Detail from "@/app/component/detail";
import Image from "next/image";
import { fetchContentful } from "@/app/contentful/contentful";
import ProjectInfo from "@/app/component/projectInfo";
import Link from "next/link";

export default async function StuidoDetail(props){
    const id = parseInt(props.params.id);
    

    const data = await fetchContentful('studio');
    const studio = data[id].fields;
    const syear = studio.durationStart.substring(2, 4);
    const smonth = studio.durationStart.substring(5, 7);
    const sdate = studio.durationStart.substring(8,11);
    const eyear = studio.durationEnd.substring(2, 4);
    const emonth = studio.durationEnd.substring(5, 7);
    const edate = studio.durationEnd.substring(8,11);

    return(
        <div className="detail-back">
            <div className="detail-side">
                <div className="projectName">{studio.projectName}</div>
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
                <ProjectInfo id={id} type={"studio"}/>
                <Detail id={id} type={"studio"}/>
                <div className="move_page">
                <div className="prev_page">
                    <Link href={`/pages/studiodetail/${id-1>=0 ? (id-1)%data.length : data.length-1}`}>
                        <Image 
                        alt="..."
                        src={"/sample.png"} 
                        width={0} height={0}
                        sizes="100vw"
                        />
                    </Link>
                </div>
                <div className="next_page">
                    <Link href={`/pages/studiodetail/${(id+1)%data.length}`}>
                        <Image 
                        alt="..."
                        src={"/sample.png"} 
                        width={0} height={0}
                        sizes="100vw"
                        />
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}