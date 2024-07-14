"use client"

import { fetchContentful } from "@/app/contentful/contentful"
import { Inter } from "next/font/google";
import Image from "next/image"
import { useEffect,useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from '/public/icons/footer.svg'

const inter600 = Inter({ weight: '600', subsets: ['latin'] });
const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export default function Service(){
    const [research, setResearch]=useState([]);

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
    
    
    return(
        <div className="background">
            <div className="research-flex-wrap">
                {research && research.map((research,index)=>(
                    <div key={index} className="research-flex-item" data-aos='fade-up'>
                        <div className="research-project-info">
                            <div className={`project-title ${inter600.className}`}>{research.fields.projectName}</div>
                            <div className="research-grid">
                                <div className={`project-subheading ${inter500.className}`}>
                                    {research.fields.projectSubheading}
                                </div>
                                <div className="research-statement">
                                    <div>
                                        {research.fields.statementKr && research.fields.statementKr.content.map((data,index)=>(
                                            <div key={index}>{data.content[0].value}</div> 
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image 
                                src={'https:'+research.fields.mainImage.fields.file.url} 
                                alt="..." 
                                width={0} height={0} 
                                sizes="100vw"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}