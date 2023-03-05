import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App'


function Logout() {

    // user context
    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "Application/json",
                "Content-Type": "Application/json"
            },
            credentials: "include"
        }).then(res => {
            res.json().
                then(resultdata => {
                    if (resultdata.status === 1) {
                        navigate("/login");
                        dispatch({ type: 'USER', payload: false }) //for toggle login logout navbar

                    }
                }).catch((err) => {
                    console.log("JSON ERROR" + err);
                })

        }).catch((error) => {
            console.log("First Calling Error" + error);
        })
    }, [])


    return (
        <>
        </>
    )
}

export default Logout