import { Inter } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";

const inter600 = Inter({ weight: '600', subsets: ['latin'] });
const inter500 = Inter({ weight: '500', subsets: ['latin'] });
const inter400 = Inter({ weight: '400', subsets: ['latin'] });

export default function MovePage({id, length}){

    return(
        <div className={`move_page_container ${inter500.className}`}>
            <div>other projects</div>
            <div className="move_page">
                <div className="prev_page">
                    <Link href={`/pages/studiodetail/${id-1>=0 ? (id-1)%length : length-1}`}>
                        <Image 
                            alt="..."
                            src={"/sample.png"} 
                            width={0} height={0}
                            sizes="100vw"
                        />
                    </Link>
                </div>
                <div className="next_page">
                    <Link href={`/pages/studiodetail/${(id+1)%length}`}>
                        <Image 
                            alt="..."
                            src={"/sample.png"} 
                            width={0} height={0}
                            sizes="100vw"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}