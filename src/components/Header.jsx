export default function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Questionnaire portal</a>
                    
                    <div className="collapse navbar-collapse" id="navbarDropdownMenuLink">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fields</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Responses</a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" type="button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    User
                                </button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Edit Profile</a>
                                    <a className="dropdown-item" href="#">Change Password</a>
                                    <a className="dropdown-item" href="#">Log Out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}