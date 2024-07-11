"use client"

import { fetchContentful } from "../../contentful/contentful";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Clients(){
    const [clients, setClients]=useState([]);
    useEffect(()=>{
        const getContentful = async()=>{
            try{
                const data = await fetchContentful('clients');
                setClients(data);
                console.log(data);
            }catch(error){
                console.error('error');
            }
        }
        getContentful();
    },[]);

    function logoClass(client){
        const type = client.fields.logoType;
        const wid = client.fields.clientLogo.fields.file.details.image.width;
        const hei = client.fields.clientLogo.fields.file.details.image.height;
        const atio = hei/wid;
        if(type){
            if(atio >= 45/210){ //높이 100%
                return "height";
            }else{//넓이 100%
                return "width";
            }
        }else{
            if(atio >= 45/44){ //높이 100%
                return "height";
            }else{//넓이 100%
                return "width";
            }
        }
    }
    
    return(
        <div className="clients">
            {clients && clients.map((client,index)=>(
                <div key={index}>
                    <div className={client.fields.logoType ? 'logo' : 'symbol'}>
                        <Image 
                            src={'https:'+client.fields.clientLogo.fields.file.url}
                            alt="..."
                            width={0} height={0}
                            sizes="100vw"
                            className={logoClass(client)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );

}