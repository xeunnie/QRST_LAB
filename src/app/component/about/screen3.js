import { Inter } from 'next/font/google';

const inter500 = Inter({ weight: '500', subsets: ['latin'] });
const inter400 = Inter({ weight: '400', subsets: ['latin'] });

export default function Screen3(){

    const text4 = "Our project type is an action-orientated research initiative that utilises computational processes and methods. Take a look at some of the clients we've worked with.";

    return(
        <div>
            <div className={`text ${inter400.className}`}>{text4}</div>
            <div className='clients-logo-wrap'>
              <div className={inter500.className}>our clients</div>
              <div className='clients-list'>
                {/* <Clients/> */}
              </div>
            </div>
        </div>
    );
}