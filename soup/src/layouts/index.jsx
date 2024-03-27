import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
           <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Log In</Link>
                </li>
                <li>
                    <Link to="/email-confirmation">Email</Link>
                </li>
                <li>
                    <Link to="/detail">Detail</Link>
                </li>
                <li>
                    <Link to="/create-password">New Password</Link>
                </li>
                <li>
                    <Link to="/landing">Landing Page</Link>
                </li>
                <li>
                    <Link to="/detail-produk">Detail Produk</Link>
                </li>
                <li>
                    <Link to="/list-menu-kelas">List Menu Kelas</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout