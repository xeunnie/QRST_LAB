// "use client"
// import { useEffect, useState } from "react"
import { fetchContentful } from "@/app/contentful/contentful"
import { Inter } from "next/font/google";
import { Space_Grotesk } from 'next/font/google'

const inter500 = Inter({ weight: '500', subsets: ['latin'] });
const inter400 = Inter({ weight: '400', subsets: ['latin'] });
const space_grotesk300 = Space_Grotesk({ weight: '300', subsets: ['latin'] });


export default async function Contact(){
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
      <div className="background people" style={{fontWeight:'300'}}>
        <div className={`people-page-title ${inter500.className}`}>MEET THE TEAM</div>
        <div className="lab-leaders">
          <div className="leader">
            <div className={`name ${space_grotesk300.className}`}>
              Q Shim
            </div>
            <div className={`position ${inter400.className}`}>
              LAB Leader
            </div>
            <div className={`intro`}>
              디자인 컨버전스 콜렉티브 큐알에스티의 대표로서 다양한 분야의 융합을 통해 새로운 가치를 발굴하는 컴퓨테이셔널 디자이너이자 크리에이터, 심규하입니다.
            </div>
            <div className={`careers`}>
              <div className="career">career1</div>
              <div className="career">career1</div>
              <div className="career">career1</div>
              <div className="career">career1</div>
            </div>
          </div>
          <div className="leader">
            <div className="name">
              Shimyounf Hwang
            </div>
            <div className={`position ${inter400.className}`}>
              Student Researcher
            </div>
            <div className={`intro`}>
            디자인 컨버전스 콜렉티브 큐알에스티의 대표로서 다양한 분야의 융합을 통해 새로운 가치를 발굴하는 컴퓨테이셔널 디자이너이자 크리에이터, 심규하입니다.
            </div>
            <div className={`careers`}>
              <div className="career">career1</div>
              <div className="career">career1</div>
              <div className="career">career1</div>
              <div className="career">career1</div>
            </div>
          </div>
          <div className="leader">
            <div className="name">
              Shimyounf Hwang
            </div>
            <div className={`position ${inter400.className}`}>
              Student Researcher
            </div>
            <div className={`intro`}>
            디자인 컨버전스 콜렉티브 큐알에스티의 대표로서 다양한 분야의 융합을 통해 새로운 가치를 발굴하는 컴퓨테이셔널 디자이너이자 크리에이터, 심규하입니다.
            </div>
            <div className={`careers`}>
              <div className="career">career1</div>
              <div className="career">career1</div>
              <div className="career">career1</div>
              <div className="career">career1</div>
            </div>
          </div>
        </div>
        <div className="members">
          {people && people.map((data,index)=>(
            <div key={index} className="profile">
              <div className={`name ${space_grotesk300.className}`}>{data.fields.name}</div>
              <div className={`position ${inter400.className}`}>{data.fields.position}</div>
            </div>
          ))}
        </div>
      </div>
    )
}