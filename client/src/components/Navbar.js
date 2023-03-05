import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../Images/krmlogo.jpg';
import { UserContext } from '../App'


const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);

    const Menu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="logout">Logout</NavLink>
                    </li>

                </>
            )

        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="signup">Registeration</NavLink>
                    </li>

                </>
            )
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} className="img img-fluid krmlogo" alt='Logo'></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto mb-2 mb-md-0 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link active " aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contect">Contect</NavLink>
                        </li>
                        <Menu />
                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar