import Detail from "@/app/component/workdetail/detail";
import Image from "next/image";
import { fetchContentful } from "@/app/contentful/contentful";
import ProjectInfo from "@/app/component//workdetail/projectInfo";
import { Inter } from 'next/font/google';
import MovePage from "@/app/component/workdetail/movepage";
import Link from "next/link";
import Footer from '/public/icons/footer.svg'

const inter600 = Inter({ weight: '600', subsets: ['latin'] });

export default async function Workdetail(props){
    const id = parseInt(props.params.id);

    const data = await fetchContentful('studio');
    const length = data.length;
    const studio = data[id].fields;

    return(
        <div>
            <div className="detail-back">
                <div className="back-to-list">
                    <Link href="/pages/work">&lt; back-to-list</Link>
                </div>
                <div className="detail-side">
                    <div className={`projectName ${inter600.className}`} >{studio.projectName}</div>
                </div>
                <div className="mainImage">
                    <Image 
                        alt="..."
                        src={"/sample.png"} 
                        width={0} height={0}
                        sizes="100vw"
                    />
                </div>
                <ProjectInfo id={id}/>
                <div className="detail-side">
                    <Detail id={id}/>
                    <MovePage id={id} length={length}/>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}