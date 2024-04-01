import { fetchContentful } from "@/app/contentful/contentful";
import { Inter } from "next/font/google";
import Link from "next/link";
import Exit from '/public/icons/exit.svg'
import Pagination from "@/app/component/pagenation";

const inter = Inter({
    weight : '400',
    subsets : ['latin'],
});

export default async function LabInfo(props){
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
        <div className="background detail-container">
            <div className="project-info-btn">
                <Link href={`/pages/studiodetail/${id}`}>
                    <span><Exit/></span>
                    <span style={{fontWeight:'500'}}>{studio.projectName}</span>
                </Link>
            </div>
            <div className="project-information">
                <div className="info" style={{fontWeight:'400'}}>
                    <div>
                        <div>Duration</div>
                        <div>
                            <span>{syear}. {smonth}. {sdate}</span>
                            <span> ~ </span>
                            <span>{eyear}. {emonth}. {edate}</span>
                        </div>
                    </div>
                    <div>
                        <div>Client</div>
                        <div>{studio.client}</div>
                    </div>
                    <div>
                        <div>Category</div>
                        <div>
                            {studio.category && studio.category.map((data,index)=>(
                                <div className="list" key={index}>{data}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div>Participants</div>
                        <div>
                            {studio.participants && studio.participants.map((data,index)=>(
                                <div className="list" key={index}>{data}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`statement ${inter.className}`}>
                    {studio.statementEng.content && studio.statementEng.content.map((data,index)=>(
                        index===0 ? (
                            <div key={index}>{data.content[0].value}</div>
                        ):(
                            <div key={index}>&nbsp;&nbsp;&nbsp;{data.content[0].value}</div>
                        )  
                    ))}
                </div>
                <div className="statement">
                    {studio.statementKr.content && studio.statementKr.content.map((data,index)=>(
                        index===0 ? (
                            <div key={index}>{data.content[0].value}</div>
                        ):(
                            <div key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{data.content[0].value}</div>
                        )  
                    ))}
                </div>
            </div>
            <Pagination pageName="lab"/>
        </div>
    )
}