import {Outlet} from 'react-router'

import Nav from "../components/nav";

const Layout = () => {
    return (
        <div className='layout h-full overflow-x-hidden relative'>
            <Nav />
            <div className='outlet h-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;