import React, { useState } from 'react'
import RegisterImage from '../Images/signup.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faEnvelopeOpen, faLock, faEyeSlash, faEye, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export const Signup = () => {
    // alertify("hello", 1)
    const [type, changetype] = useState("password");
    const [myicon, changeicon] = useState(faEyeSlash);
    function showhidepass() {
        if (type === "password") {
            changetype("text");
            changeicon(faEye)
        } else {
            changetype("password");
            changeicon(faEyeSlash)
        }
    }
    const [Regdata, setData] = useState({
        uname: "", email: "", phone: "", profession: "", pass: "", cpass: ""
    });

    let fieldname, val;
    const CreateArray = (e) => {
        fieldname = e.target.name;
        val = e.target.value;
        setData({ ...Regdata, [fieldname]: val })
    }

    /*********Reset Form Data *******/
    const resetdata = () => {
        setData({ ...Regdata, uname: "", email: "", phone: "", profession: "", pass: "", cpass: "" })
    }

    /*********** User Registration **********/
    let navigate = useNavigate();
    const Registeruser = async (e) => {
        e.preventDefault();
        // const { uname, email, phone, profession, pass, cpass } = Regdata;
        const responseval = await fetch('/registor', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Regdata)
        })
        const resultdata = await responseval.json();
        // alert(resultdata.message)
        if (resultdata.status === 1) {
            Swal.fire({
                icon: 'success',
                title: 'Congratulations',
                text: resultdata.message,
            }).then(() => {
                resetdata();
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: resultdata.message,
            })
        }
    }

    return (
        <>
            <div className='container my-auto mt-4 commenbbox'  >
                <div id="regdiv" className='regdiv'>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                            <div className="signuplogo p-5">
                                <img src={RegisterImage} className="img-fluid " alt="Register Image Not found" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 mt-4 ">
                            <h4 className=''>Sign Up</h4>
                            <form method='POST' className='mt-5' id='signupform'>
                                <div className="form-group">
                                    <label htmlFor="uname"><FontAwesomeIcon icon={faUser} /></label>
                                    <input value={Regdata.uname} onChange={CreateArray} type="text" id='uname' name='uname' className='inputfield' placeholder='Enter Your Name' autoComplete='off' className='' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="uname"><FontAwesomeIcon icon={faEnvelopeOpen} /></label>
                                    <input value={Regdata.email} onChange={CreateArray} type="email" id='email' name='email' placeholder='Enter Your Email' autoComplete='off' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="uname"><FontAwesomeIcon icon={faPhone} /></label>
                                    <input value={Regdata.phone} onChange={CreateArray} type="number" id='phone' name='phone' placeholder='Enter Your Phone Number' className='' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="profession"><FontAwesomeIcon icon={faUserTie} /></label>
                                    <input value={Regdata.profession} onChange={CreateArray} type="text" id='profession' name='profession' placeholder='Your Profession' className='' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="uname"><FontAwesomeIcon icon={myicon} onClick={showhidepass} data-clicked="1" className='eyeicon' /></label>
                                    <input value={Regdata.pass} onChange={CreateArray} type={type} id='pass' name='pass' placeholder='Password ' className='passinput' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="uname"><FontAwesomeIcon icon={faLock} /></label>
                                    <input value={Regdata.cpass} onChange={CreateArray} type={type} id='cpass' name='cpass' placeholder='Confirm Password' className='' />
                                </div>
                                <div className="mt-3">
                                    <button type="submit" onClick={Registeruser} className="btn  btn-primary">Register</button>
                                </div>
                                <div className="mt-1 text-center">
                                    <NavLink className="btn btn-link active " aria-current="page" to="/login">Already Registered?</NavLink>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Signup
