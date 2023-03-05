import React, { useEffect, useState } from 'react';
import Aboutimg from '../Images/myimage.jpeg';
import { useNavigate } from "react-router-dom";

export const About = () => {
    const [Userdata, setData] = useState({});
    const navigate = useNavigate();
    const Validateuser = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "Application/json",
                    "Content-Type": "Application/json"
                },
                credentials: "include"
            })
            const resultdata = await res.json();
            if (resultdata.status == 1) {
                setData(resultdata.data);
                // console.log(resultdata.data.email);
            } else {
                navigate("/login");

            }

        } catch (error) {
            console.log(error);
            navigate("/login");
        }

    }
    useEffect(() => {
        Validateuser();
    }, [])


    return (
        <div className='container my-auto mt-4 ' >
            <div id="" className='p-3 mx-5 logindiv about commenbbox'>
                <div className="row mt-4">
                    <div className="col-sm-3 col-md-4 col-xl-4 col-lg-4 quickdetails">
                        <div className="profileimg d-flex  m-auto">
                            <img src={Aboutimg} className="img-fluid img-thumbnail aboutimg" alt="Register Image Not found" />
                            {/* <button className='btn changeimgbtn'>Change Photo</button> */}
                        </div>
                        <div className="text-center mt-3">
                            <h5><span className='badge bg-secondary'>Facebook</span></h5>
                            <h5><span className='badge bg-secondary'>Linkdln</span></h5>
                            <h5><span className='badge bg-secondary'>Github</span></h5>
                            <h5><span className='badge bg-secondary'>PHP </span></h5>
                            <h5><span className='badge bg-secondary'>MERN </span></h5>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-6 col-xl-6 col-lg-6 p-5 fulldetails">
                        <h6 className='username'>{Userdata.uname}</h6>
                        <p className='userprofesion'>{Userdata.profession}</p>
                        <p>Rankings: <b><span className='userranking'>1/10</span></b> </p>

                        {/* tabls */}
                        <ul className="nav nav-tabs">
                            <li className='nav-item active' >
                                <a href="#details" className='nav-link ' data-toggle="tab">About</a>
                            </li>
                            <li className='nav-item' >
                                <a href="#timeline" className='nav-link' data-toggle="tab">Timeline</a>
                            </li>
                        </ul>

                        <div className="tab-content mt-3">
                            <div className="tab-pane active" id="details">
                                <div className="row">
                                    <p><strong>User Id: </strong> <span>{Userdata._id}</span></p>
                                    <p><strong>Name: </strong> <span>{Userdata.uname}</span></p>
                                    <p><strong>Email: </strong> <span>{Userdata.email}</span></p>
                                    <p><strong>Phone: </strong> <span>{Userdata.phone}</span></p>
                                    <p><strong>Profesion: </strong> <span>{Userdata.profession}</span></p>
                                </div>
                            </div>
                            <div className="tab-pane" id="timeline">Time Line</div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-2 col-xl-2 col-lg-2 mt-2">
                        {/* <button type="button" className="btn btn-outline-secondary rounded-pill" >Edit Profile</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
