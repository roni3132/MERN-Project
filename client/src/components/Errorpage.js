import React from 'react';
import Errorimg from '../Images/404.jpg';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
            <div id="error" className='container-fluid ' >
                <img src={Errorimg} alt="404 Page Please  Go To Home Page" className='rounded mx-auto d-block ' />
                <div class="d-grid gap-2 col-2 mx-auto">
                    <NavLink className="btn btn-primary" aria-current="page" to="/">Back To Home Page</NavLink>
                </div>
            </div>
        </>
    )
}

export default Errorpage