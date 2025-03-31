import osdagLogo from '/osdagLogo.jpg';
import fosseeLogo from '/FOSSEELogo.jpg'
import IITBLogo from "/IITBLogo.jpg"

function HomeLandingPage(){
    return (
        <div className="w-full h-screen flex flex-col bg-[#F0F0F0]">
        <div className="flex-1 flex justify-center items-center">
            <img src={osdagLogo} alt="Osdag Logo" className="max-w-[80%] max-h-[60%] object-contain"/>
        </div>
        <div className='w-full flex justify-between items-center px-8 pb-5'>
            <img src={IITBLogo} alt="IIT Bombay Logo" className="h-[100%] object-contain"/>
            <img src={fosseeLogo} alt="FOSSEE Logo" className="h-[100%] object-contain"/>
        </div>
        </div>
    )
}

export default HomeLandingPage