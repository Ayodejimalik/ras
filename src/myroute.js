import { Dad } from "./first";
import { Outlet } from "react-router-dom";
function Routesout() { 
    return (
        <>


            <Dad />
            <Outlet />
        </>
    );


}
export default Routesout