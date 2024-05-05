import React,{ useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function EditProfile() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const navigator = useNavigate();

    function handleFirtsName(e) {
        setFirstName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumber(e) {
        setPhoneNumber(e.target.value);
    }

    function saveProfileInfo(e) {
        e.preventDefault();

        const profile = {firstName, lastName, email, phoneNumber}
        console.log(profile)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card px-0 mx-auto my-5" style={{width: '400px'}}>
                    <div className="card-header">
                        <h3>Edit Profile</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name</label>
                                <input  type='text'
                                        name='firstName'
                                        value={firstName}
                                        className="form-control"
                                        onChange={handleFirtsName}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Last Name</label>
                                <input  type='text'
                                        name='lastName'
                                        value={lastName}
                                        className="form-control"
                                        onChange={handleLastName}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email</label>
                                <input  type='text'
                                        name='email'
                                        value={email}
                                        className="form-control"
                                        onChange={handleEmail}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Phone Number</label>
                                <input  type='text'
                                        name='phoneNumber'
                                        value={phoneNumber}
                                        className="form-control"
                                        onChange={handlePhoneNumber}>
                                </input>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="container d-flex">
                            <button className="btn btn-primary align-self-center" onClick={saveProfileInfo}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}