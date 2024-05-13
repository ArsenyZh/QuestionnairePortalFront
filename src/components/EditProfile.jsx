import React,{ useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import {user, editUserInfo} from '../services/UserService'

export default function EditProfile() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const navigator = useNavigate();

    const [userInfo, setUserInfo] = useState('')

    useEffect(() => {
        user().then((response) => {
            setUserInfo(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function saveProfileInfo(e) {
        e.preventDefault();

        const profile = {firstName : firstName || userInfo.firstName, 
                        lastName : lastName || userInfo.lastName, 
                        email : email || userInfo.email, 
                        phoneNumber : phoneNumber || userInfo.phoneNumber}
        console.log(profile)

        editUserInfo(profile).then((response) => {
            console.log(response.data);
            navigator('/fields')
        }) 
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
                                        placeholder={userInfo.firstName}
                                        onChange={(e) => {setFirstName(e.target.value);}}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Last Name</label>
                                <input  type='text'
                                        name='lastName'
                                        value={lastName}
                                        className="form-control"
                                        placeholder={userInfo.lastName}
                                        onChange={(e) => {setLastName(e.target.value);}}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email</label>
                                <input  type='text'
                                        name='email'
                                        value={email}
                                        className="form-control"
                                        placeholder={userInfo.email}
                                        onChange={(e) => {setEmail(e.target.value);}}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Phone Number</label>
                                <input  type='text'
                                        name='phoneNumber'
                                        value={phoneNumber}
                                        className="form-control"
                                        placeholder={userInfo.phoneNumber}
                                        onChange={(e) => {setPhoneNumber(e.target.value);}}>
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