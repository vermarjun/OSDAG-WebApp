import { Outlet } from "react-router";
import Sidebar from "./components/homesidebar";

function HomePageLayout(){
    return (    
        <div className="w-screen h-screen flex justify-between">
            <div className="w-fit h-fit">
                <Sidebar/>
            </div>
            <div className="w-full h-full">
                <Outlet/>
            </div>
        </div>
    )
}
export default HomePageLayout;