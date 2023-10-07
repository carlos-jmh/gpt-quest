import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-screen-md p-4">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout