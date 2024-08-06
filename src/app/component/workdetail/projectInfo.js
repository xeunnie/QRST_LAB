import { fetchContentful } from "@/app/contentful/contentful";
import { Inter } from 'next/font/google';

const inter400 = Inter({ weight: '400', subsets: ['latin'] });

export default async function ProjectInfo(props){

    const id = parseInt(props.id);

    const data = await fetchContentful('studio');
    const studio = data[id].fields;
    const syear = studio.durationStart.substring(2, 4);
    const smonth = studio.durationStart.substring(5, 7);
    const sdate = studio.durationStart.substring(8,11);
    const eyear = studio.durationEnd.substring(2, 4);
    const emonth = studio.durationEnd.substring(5, 7);
    const edate = studio.durationEnd.substring(8,11);

    return(
        <div className="work-detail-information">
            <div className={`info ${inter400.className}`}>
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
                <div className={`statement ${inter400.className}`}>
                    {studio.statementEng.content && studio.statementEng.content.map((data,index)=>(
                        index===0 ? (
                            <div key={index}>{data.content[0].value}</div>
                        ):(
                            <div key={index}><br/>{data.content[0].value}</div>
                        )  
                    ))}
                </div>
                <div className="statement">
                    {studio.statementKr.content && studio.statementKr.content.map((data,index)=>(
                        index===0 ? (
                            <div key={index}>{data.content[0].value}</div>
                        ):(
                            <div key={index}><br/>{data.content[0].value}</div>
                        )  
                    ))}
                </div>
        </div>  
    );
}