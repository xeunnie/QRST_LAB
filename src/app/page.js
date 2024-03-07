"use client"

import { useState, useEffect } from 'react';
import Up from '/public/icons/up.svg'
import Down from '/public/icons/down.svg'
import Clients from './component/clients';
import MobileMenu from './component/mobileMenu';

export default function Home() {
  const [page, setPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [textOnOff, setTextOnOff] = useState(true);
  const [typing, setTyping] = useState("");
  const [typingOn, setTypingOn]=useState(false);


  useEffect(()=>{
    setTimeout(() => {
      setTextOnOff(false);
    }, 10000); 
  },[])

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (!isScrolling) {
        setIsScrolling(true);

        if (event.deltaY > 0) {
          setPage((prevPage) => Math.min(prevPage + 1, lastPage));
        }
        if (event.deltaY < 0) {
          setPage((prevPage) => Math.max(prevPage - 1, 0));
        }

        setTimeout(() => {
          setIsScrolling(false);
        }, 1550); 
      }
    };

    const box = document.getElementsByClassName('box');
    const lastPage = box.length - 1;

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isScrolling]); 

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowDown') {
        setPage((prevPage) => Math.min(prevPage + 1, lastPage));
      } else if (event.key === 'ArrowUp') {
        setPage((prevPage) => Math.max(prevPage - 1, 0));
      }
    };

    const box = document.getElementsByClassName('box');
    const lastPage = box.length - 1;

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const wrap = document.getElementById('wrap');
    wrap.style.top = page * -100 + 'vh';

    if (page === 1 && typingOn === false) {
      setTypingOn(true); 
      setTyping("");
      setTimeout(startTypingAnimation,1000);
    } 
    
    const pagination = document.querySelector('.pagination div');
    pagination.style.transition = 'top 0.5s ease-in-out';
    pagination.style.top = `${page * 20}vh`;

  }, [page]);

  const text1 = "Founded by Prof. Kyuha Shim, Collective QrsT (2022-) within Korea National University of Arts is a practice-based research initiative using computational processes and methods to explore creativity. Rather than just a means, emerging technologies"
  const text2 = "Collective QRST"
  const text3 = "는 2022년에 심규하 교수에 의해 창립된 한국예술종합학교 소속으로, 창의성을 탐구하기 위해 컴퓨터 프로세스와 방법을 활용하는 실천 중심의 연구 이니셔티브입니다. 단순히 수단이 아니라, 신기술들을 탐구하고 이를 통해 창의성을 탐험하는 데 중점을 두고 있습니다."
  const text4 = "Our project type is an action-orientated research initiative that utilises computational processes and methods. Take a look at some of the clients we've worked with."
  
  const string = text3.split("");
  
  let index = 0;

  const startTypingAnimation = () => {
    
    function Typing() {
      if (index < string.length - 1) {
        setTyping((prevTyping) => prevTyping + string[index]);
        index += 1;
        setTimeout(Typing, 100);
      }else{
        setTypingOn(false);
      }
    }
    Typing();
  };

 
  const handleScrollTop = () => {
    const wrap = document.getElementById('wrap');
    wrap.style.top = 0 * -100 + 'vh';
    setPage(0);
  };

  const handleScrollBottom = () => {
    const wrap = document.getElementById('wrap');
    wrap.style.top = 3 * -100 + 'vh';
    setPage(3);
  };

  return (
    <div className='container'>
      <div id="wrap" className="wrap">
        <div className="box screen1">
          <div className={`text ${textOnOff?'':'text-off'}`}>
            {text1}
          </div>
        </div>
        <div className="box screen2">
          <div className="text draggdisable">
            {text2}
            <span className='typed-out' id='typing'>{typing}</span>
            <span>_</span>
          </div>
        </div>
        <div className="box screen3">
          <div className='text'>{text4}</div>
          <div className='clients-logo-wrap'>
              <div>our clients :</div>
              <div className='clients-list'>
                <Clients/>
              </div>
            </div>
        </div>
        <div className="box screen4">
        </div>
      </div>
      <MobileMenu/>
      <div className='pagination'>
        <div>Collective QRST</div>
        <div className='icon-wrap'>
          {page !== 0 && <Up onClick={()=>handleScrollTop()} />}
          {page !== 3 && <Down onClick={()=>handleScrollBottom()} />}
        </div>
      </div>
    </div>
  );
}

