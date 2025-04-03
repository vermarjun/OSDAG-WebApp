import { useNavigate } from "react-router-dom"
import InputDock from "./components/inputdock"
import OutputDock from "./components/outputdock"
import ModelImage from "/structure.jpg"
import { DataProvider } from "./components/outputdock"

function Model(){
    const navigate = useNavigate();
    return (    
        <div className="w-fit h-screen flex flex-col justify-start items-start">
            <div className="w-full flex justify-around items-center">
                <button onClick={()=>navigate("/connection")} className="hover:cursor-pointer hover:bg-gray-300 w-full h-full p-2">Home</button>
                <button className="w-full p-2 hover:cursor-pointer hover:bg-gray-300">Help</button>
            </div>
            <div>
                <img src={ModelImage} alt=""/>
            </div>
            <div className="border-1 border-sky-300 w-full h-full overflow-y-scroll">
                
            </div>
        </div>
    )
}

function EndPlateConnection(){
    return (
        <div className="w-screen h-fit flex justify-between items-center overflow-hidden">
            <DataProvider>
                <InputDock/>
                <Model/>
                <OutputDock/>
            </DataProvider>
        </div> 
    )   
}
export default EndPlateConnection;