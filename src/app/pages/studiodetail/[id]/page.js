"use client"
import { useState, useEffect } from "react";
import Detail from "@/app/component/detail";

export default function StuidoDetail(props){
    const id = parseInt(props.params.id);

    return(
        <div>
            <Detail id={id} type={"studio"}/>
        </div>
    )
}