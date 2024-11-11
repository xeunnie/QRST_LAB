import HomeLogo1 from '/public/icons/homeLogo1.svg';
import HomeLogo2 from '/public/icons/homeLogo2.svg';

export default function Screen1(){

    return(
        <div className='videocontainer'>
            <div className="text">
                <span className='homelogo1'><HomeLogo1/></span>
                <span className='homelogo2'><HomeLogo2/></span>
            </div>
            <iframe
                src="https://player.vimeo.com/video/468693933?h=2036d22e84&autoplay=1&loop=1&muted=1&background=1"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="video-background"
                title="Vimeo Video"
            ></iframe>
        </div>
    );
}