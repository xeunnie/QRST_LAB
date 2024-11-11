import Detail from "../../../components/workdetail/detail";
import Image from "next/image";
import { fetchContentful } from "@/lib/contentful";
import ProjectInfo from "../../../components/workdetail/projectInfo";
import { Inter } from 'next/font/google';
import MovePage from "../../../components/workdetail/movepage";
import Link from "next/link";
import Footer from '/public/icons/footer.svg'

const inter600 = Inter({ weight: '600', subsets: ['latin'] });
const inter500 = Inter({ weight: '500', subsets: ['latin'] });

export default async function Workdetail(props){
    const id = parseInt(props.params.id);

    const data = await fetchContentful('studio');
    const length = data.length;
    const studio = data[id].fields;

    return(
        <div>
            <div className="detail-back">
                <div className={`back-to-list ${inter500.className}`}>
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