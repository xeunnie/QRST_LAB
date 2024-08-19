"use client"

import { Inter } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';

const inter600 = Inter({ weight: '600', subsets: ['latin'] });
const inter500 = Inter({ weight: '500', subsets: ['latin'] });
const inter400 = Inter({ weight: '400', subsets: ['latin'] });

export default function MovePage({id, length}){
    const [randomIndex, setRandomIndex] = useState(null);

    useEffect(() => {
        // 랜덤 인덱스를 생성하는 함수
        function getRandomIndexExcluding(length, id) {
          let random;
          do {
            random = Math.floor(Math.random() * length);
          } while (random === id);
          return random;
        }
    
        // 새로운 랜덤 인덱스를 생성하여 상태를 업데이트
        setRandomIndex(getRandomIndexExcluding(length, id));
      }, [id, length]);

    return(
        <div className={`move_page_container ${inter500.className}`}>
            <div>other projects</div>
            <div className="move_page">
                <div className="prev_page">
                    <Link href={`/pages/workdetail/${id-1>=0 ? (id-1)%length : length-1}`}> 
                        <Image 
                            alt="..."
                            src={"/sample.png"} 
                            width={0} height={0}
                            sizes="100vw"
                        />
                    </Link>
                    <div className='prevpage-title'>
                        {/* data-connection */}
                        Emotional Metrics For Samsung Smart TV dfd sdbhsbdhbshd 
                    </div>
                </div>
                <div className="next_page">
                    <Link href={`/pages/workdetail/${(id+1)%length}`}>
                        <Image 
                            alt="..."
                            src={"/sample.png"} 
                            width={0} height={0}
                            sizes="100vw"
                        />
                    </Link>
                    <div className='nextpage-title'>
                        {/* data-connection */}
                        Emotional Metrics For Samsung Smart TV dfd sdbhsbdhbshd 
                    </div>
                </div>
                <div className="random_page">
                    <Link href={`/pages/workdetail/${randomIndex}`}>
                        <Image 
                            alt="..."
                            src={"/sample.png"} 
                            width={0} height={0}
                            sizes="100vw"
                        />
                    </Link>
                    <div className='randompage-title'>
                        {/* data-connection */}
                        Emotional Metrics For Samsung Smart TV dfd sdbhsbdhbshd 
                    </div>
                </div>
            </div>
        </div>
    );
}

// href={`/pages/studiodetail/${id-1>=0 ? (id-1)%length : length-1}`}
// href={`/pages/studiodetail/${(id+1)%length}`}