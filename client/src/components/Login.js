import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";
import LoginImage from '../Images/login.jpg';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { UserContext } from '../App'

const Login = () => {

    // user context
    const { state, dispatch } = useContext(UserContext);
    // Show hide Password
    const [type, changetype] = useState("password");
    const [myicon, changeicon] = useState(faEyeSlash);
    const showhidepass = () => {
        if (type === "password") {
            changetype("text");
            changeicon(faEye)
        } else {
            changetype("password");
            changeicon(faEyeSlash)
        }
    }
    const [Logindata, serData] = useState({
        email: "",
        pass: ""
    })

    let field, value;
    const createArray = (e) => {
        field = e.target.name;
        value = e.target.value;
        serData({ ...Logindata, [field]: value });
    }

    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    const Loginuser = async (e) => {
        e.preventDefault();
        const req = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Logindata)
        })

        const jsondata = await req.json();
        // alert(jsondata.message);
        if (jsondata.status === 1) {
            MySwal.fire({
                title: <strong>Congratulations</strong>,
                html: <i>{jsondata.message}</i>,
                icon: 'success'
            }).then(() => {
                navigate('/');
                dispatch({ type: 'USER', payload: true }) //for toggle login logout navbar
            })
        } else {
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: jsondata.message,
            })
        }

    }

    return (
        <div className='container my-auto mt-4 ' >
            <div id="regdiv" className='p-3 mx-5 logindiv commenbbox logindiv'>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 mt-4 p-5 ">
                        <h4 className=''>Sign Up</h4>
                        <form method='POST' className='mt-5'>
                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={faEnvelopeOpen} /></label>
                                <input type="email" value={Logindata.email} onChange={createArray} id='email' name='email' placeholder='Enter Your Email' autoComplete='off' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="uname"><FontAwesomeIcon icon={myicon} onClick={showhidepass} data-clicked="1" className='eyeicon' /></label>
                                <input type={type} id='pass' name='pass' value={Logindata.pass} onChange={createArray} placeholder='Password ' className='passinput' />
                            </div>
                            <div className="mt-3">
                                <button type="submit" onClick={Loginuser} className="btn btn-success">Login</button>
                            </div>
                            <div className="mt-1 text-center">
                                <NavLink className="btn btn-link active " aria-current="page" to="/signup">Register</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                        <div className="signuplogo p-5">
                            <img src={LoginImage} className="img-fluid loginimg " alt="Register Image Not found" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login