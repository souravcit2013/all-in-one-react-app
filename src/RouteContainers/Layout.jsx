import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <nav className="nav-list">
                <ul>
                    <li><Link to={'/'} >Home</Link></li>
                    <li><Link to={'/todo'} >Todo</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default Layout