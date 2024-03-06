import { fetchContentful } from "@/app/contentful/contentful"
import Image from "next/image"
import Link from "next/link";
import Pagination from "@/app/component/pagenation";

export default async function Studio(){

    const studio = await fetchContentful('studio');
    
    return(
        <div className="background">
            <div className="flex-wrap">
                {studio && studio.map((studio,index)=>(
                    <div className="flex-item" key={index}>
                        <Link href={`/pages/studiodetail/${index}`}>
                            <Image 
                                src={'https:'+studio.fields.mainImage.fields.file.url} 
                                alt="..." 
                                width={0} height={0} 
                                sizes="100vw"
                            />
                            <div className="project">
                                <div>{studio.fields.projectName}</div>
                                <div>{studio.fields.projectSubheading}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination pageName="studio"/>
        </div>
    )
}