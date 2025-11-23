import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/doctors" end>Doctors</NavLink>
                </li>
                <li>
                    <NavLink to="/expired" end>Expired</NavLink>
                </li>
                <li>
                    <NavLink to="/about" end>About</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" end>Settings</NavLink>
                </li>
                <li>
                    <NavLink to="/login" end>Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}