"use client"
import { fetchContentful } from "@/app/contentful/contentful";
import Image from "next/image";
import Plus from '/public/icons/plus.svg'
import Link from 'next/link';
import Pagination from "@/app/component/pagenation";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Detail(props){
    const id = parseInt(props.id);
    const type = props.type;
    const [images, setImages]=useState([]);
    const [layout, setLayout]=useState([]);

    useEffect(()=>{
        Aos.init();
    });

    useEffect(()=>{
        const getContentful = async () => {
            try {
              var data = await fetchContentful(type);
              setImages(data[id].fields.images);
              setLayout(data[id].fields.layout);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
      
          getContentful();
    },[]);

    const layoutArr = Array.isArray(layout) ? layout.map(Number) : layout.split(',').map(Number);
    
    const createImageArr =(images, layoutArr)=>{
        const imageArr = [];
        let imageIdx = 0;
        for(let i = 0 ; i < layoutArr.length; i++){
            if(imageIdx > images.length - 1) break;
            imageArr[i]=[];
            for(let j=0;j<layoutArr[i];j++){
                if(imageIdx > images.length - 1) break;
                imageArr[i][j]= 'https:'+images[imageIdx++].fields.file.url || null;
            }
        }
        return imageArr;
    }

    const imageArray = createImageArr(images, layoutArr);

    return(
        <div style={{fontWeight:'500'}}>
            {/* <div className="project-info-btn">
                <Link href={`/pages/studioinfo/${id}`}> 
                    <span><Plus/></span>
                    <span>Project Information</span>
                </Link>
            </div> */}
            <div className="detail-images-wrap"> 
                {imageArray.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex-layout">
                        {row.map((imageURL, colIndex) => (
                            <span key={colIndex} data-aos='fade-up'>
                                <Image 
                                    alt="..."
                                    src={imageURL} 
                                    width={0} height={0}
                                    sizes="100vw"
                                />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
            {/* <Pagination pageName="studio"/> */}
        </div>
    )
}