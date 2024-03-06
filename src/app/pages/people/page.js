// "use client"
// import { useEffect, useState } from "react"
import { fetchContentful } from "@/app/contentful/contentful"
import Pagination from "@/app/component/pagenation";
import Image from "next/image";

export default async function People(){
    // const [people,setPeople]=useState([]);
    // const [labInfo, setLabInfo]=useState([]);
    // useEffect(()=>{
    //     const getContentful = async () => {
    //         try {
    //           var data = await fetchContentful('people');
    //           setPeople(data);
    //           console.log('peopele');
    //           console.log(data);
    //           var data1 = await fetchContentful('lapInfo');
    //           setLabInfo(data1[0]);
    //           console.log('lab');
    //           console.log(data1[0]); 
    //         } catch (error) {
    //           console.error("Error fetching data:", error);
    //         }
    //       }
      
    //       getContentful();
    // },[])

    const people = await fetchContentful('people');
    const data = await fetchContentful('lapInfo');
    const labInfo = data[0].fields;

    return(
      <div className="background people">
        <div className="page-title">We are QRST Members</div>
        <Pagination pageName="people"/>
        <div className="members">
          {people && people.map((data,index)=>(
            <div key={index} className="profile">
              <div className="circle">
                <Image 
                  src={'https:'+data.fields.profile.fields.file.url} 
                  alt="..." 
                  width={0} height={0} 
                  sizes="100vw"/>
              </div>
              <div className="name">{data.fields.name}</div>
              <div className="position">{data.fields.position}</div>
            </div>
          ))}
        </div>
        <div className="lab-info">
            <div className="lab-logo">
              <Image
                src={'https:'+labInfo.logo.fields.file.url} 
                alt="..." 
                width={0} height={0} 
                sizes="100vw"
              />
            </div>
            <div className="info-detail">
              <div>work with us</div>
              <div>{labInfo.email}</div>
              <div>{labInfo.contact}</div>
            </div>
            <div className="info-detail">
              <div>Location</div>
              <div>{labInfo.addressKr}</div>
              <div>{labInfo.addressEng}</div>
            </div>
            <div className="info-detail">
              <div>based in</div>
              <div>{labInfo.basedIn}</div>
            </div>
        </div>
      </div>
    )
}