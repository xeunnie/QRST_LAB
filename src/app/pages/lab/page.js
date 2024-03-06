import { fetchContentful } from "@/app/contentful/contentful"
import Image from "next/image"
import Link from "next/link";
import Pagination from "@/app/component/pagenation";

export default async function Lap(){

    const lab = await fetchContentful('studio');
    
    return(
        <div className="background">
            <div className="flex-wrap">
                {lab && lab.map((lab,index)=>(
                    <div className="flex-item" key={index}>
                        <Link href={`/pages/lapdetail/${index}`}>
                            <Image 
                                src={'https:'+lab.fields.mainImage.fields.file.url} 
                                alt="..." 
                                width={0} height={0} 
                                sizes="100vw"
                            />
                            <div className="project">
                                <div>{lab.fields.projectName}</div>
                                <div>{lab.fields.projectSubheading}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination pageName="lap"/>
        </div>
    )
}