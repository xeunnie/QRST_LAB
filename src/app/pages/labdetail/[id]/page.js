import { fetchContentful } from "@/app/contentful/contentful";
import Image from "next/image";
import Plus from '/public/icons/plus.svg'
import Link from 'next/link';
import Pagination from "@/app/component/pagenation";

export default async function LapDetail(props){
    const id = parseInt(props.params.id);
    const data = await fetchContentful('studio');
    const images = data[id].fields.images;
    const layout = data[id].fields.layout;
    const layoutArr = layout.split(',').map(Number);

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
        <div className="background detail-container">
            <div className="project-info-btn">
                <Link href={`/pages/labinfo/${id}`}> 
                    <span><Plus/></span>
                    <span>Project Information</span>
                </Link>
            </div>
            <div className="detail-images-wrap">
                {imageArray.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex-layout">
                        {row.map((imageURL, colIndex) => (
                            <span key={colIndex}>
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
            <Pagination pageName="lap"/>
        </div>
    )
}