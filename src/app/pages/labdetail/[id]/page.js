// "use client"
// import { useState, useEffect } from "react";
import Detail from "@/app/component/detail";
import { fetchContentful } from "@/app/contentful/contentful";

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
        <div>
            <Detail id={id} type={"studio"}/>
        </div>
    )
}