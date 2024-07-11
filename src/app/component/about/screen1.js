import HomeLogo1 from '/public/icons/homeLogo1.svg';
import HomeLogo2 from '/public/icons/homeLogo2.svg';

export default function Screen1(){

    return(
        <div className="text">
            <span className='homelogo1'><HomeLogo1/></span>
            <span className='homelogo2'><HomeLogo2/></span>
        </div>
    );
}