"use client"

import { fetchContentful } from "@/app/contentful/contentful"
import Image from "next/image"
import Pagination from "@/app/component/pagenation";
import { useEffect,useState,useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Research(){
    const [research, setResearch]=useState([]);
    const refEle = useRef();
    const [lightIndex,setLightIndex] = useState(0);

    useEffect(()=>{
        Aos.init();
    });

    useEffect(()=>{
        
        const getContentful = async()=>{
            try{
                const data = await fetchContentful('research');
                setResearch(data);

            }catch(error){
                console.error("error");
            }
        }
        getContentful();

    },[]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setLightIndex(Math.ceil(window.scrollY/refEle.current.offsetHeight));
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }
      }, []);
    
    
    return(
        <div className="background">
            <div className="flex-wrap">
                {research && research.map((research,index)=>(
                    <div key={index} className="research-flex-item" ref={index===0 ? refEle : null} data-aos='fade-up'>
                        <span className={index===lightIndex?'light':'dark'}></span>
                        <div>
                            <Image 
                                src={'https:'+research.fields.mainImage.fields.file.url} 
                                alt="..." 
                                width={0} height={0} 
                                sizes="100vw"
                            />
                        </div>
                        <div>
                            <div className="project-title">{research.fields.projectName}</div>
                            <div className="project-subheading">{research.fields.projectSubheading}</div>
                            <div className="research-statement">
                                <div>
                                    {research.fields.statementEng && research.fields.statementEng.content.map((data,index)=>(
                                        index===0 ? (
                                            <div key={index}>{data.content[0].value}</div>
                                        ):(
                                            <div key={index}>&nbsp;&nbsp;&nbsp;{data.content[0].value}</div>
                                        )  
                                    ))}
                                </div>
                                <div>
                                    {research.fields.statementKr && research.fields.statementKr.content.map((data,index)=>(
                                        index===0 ? (
                                            <div key={index}>{data.content[0].value}</div>
                                        ):(
                                            <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{data.content[0].value}</div>
                                        )  
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination pageName="research"/>
        </div>
    )
}