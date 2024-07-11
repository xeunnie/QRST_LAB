import { Inter } from 'next/font/google';

const inter400 = Inter({ weight: '400', subsets: ['latin'] });
const inter300 = Inter({ weight: '300', subsets: ['latin'] });

export default function Screen3(){

    const text4 = "Our project type is an action-orientated research initiative that utilises computational processes and methods. Take a look at some of the clients we've worked with.";

    return(
        <div className='about-screen3-container'>
            <div className={`clients-statement ${inter300.className}`}>{text4}</div>
            <div className='clients-logo-wrap'>
              <div className={inter400.className}>our clients</div>
              <div className='clients-list'>
                {/* <Clients/> */}
              </div>
            </div>
        </div>
    );
}