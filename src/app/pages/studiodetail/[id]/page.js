"use client"
import { fetchContentful } from "@/app/contentful/contentful";
import Image from "next/image";
import Plus from '/public/icons/plus.svg'
import Link from 'next/link';
import Pagination from "@/app/component/pagenation";
import { useState, useEffect } from "react";

export default function StuidoDetail(props){
    const id = parseInt(props.params.id);
    const [images, setImages]=useState([]);
    const [layout, setLayout]=useState([]);

    useEffect(()=>{
        const getContentful = async () => {
            try {
              var data = await fetchContentful('studio');
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
        <div className="background detail-container" style={{fontWeight:'500'}}>
            <div className="project-info-btn">
                <Link href={`/pages/studioinfo/${id}`}> 
                    <span><Plus/></span>
                    <span>Project Information</span>
                </Link>
            </div>
            <div className="detail-images-wrap"> 
                {imageArray.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex-layout">
                        {row.map((imageURL, colIndex) => (
                            <span key={colIndex} >
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
            <Pagination pageName="studio"/>
        </div>
    )
}