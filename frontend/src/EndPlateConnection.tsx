import InputDock from "./components/inputdock"
import OutputDock from "./components/outputdock"

function EndPlateConnection(){
    return (
        <div className="w-screen h-fit flex justify-between items-center overflow-hidden">
            <InputDock/>
            <OutputDock/>
        </div> 
    )   
}
export default EndPlateConnection;