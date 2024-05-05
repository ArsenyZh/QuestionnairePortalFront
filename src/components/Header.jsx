import { useNavigate } from "react-router-dom"
import { user } from "../services/UserService"
import React, { useEffect, useState } from "react"

export default function Header() {

    const navigator = useNavigate();

    const [userName, setUserName] = useState([])

    useEffect(() => {
        user().then((response) => {
            setUserName(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function Profile() {
        navigator('/user')
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Questionnaire portal</a>
                        <div className="collapse navbar-collapse justify-content-md-end " id="navbarDropdownMenuLink">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/fields">Fields</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/responses">Responses</a>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" onClick={Profile} type="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        {userName.firstName + userName.lastName}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="/edit-profile">Edit Profile</a>
                                        <a className="dropdown-item" href="/change-password">Change Password</a>
                                        <a className="dropdown-item" href="#">Log Out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}