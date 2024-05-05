import React,{ useState } from "react"
import { useNavigate } from 'react-router-dom'

export default function EditProfile(props) {

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const isLoggedIn = props.isLoggedIn;

    const navigator = useNavigate();

    function handelCurrentPassword(e) {
        setCurrentPassword(e.target.value);
    }

    function handleNewPassword(e) {
        setNewPassword(e.target.value);
    }

    function handleConfirmNewPassword(e) {
        setConfirmNewPassword(e.target.value);
    }

    function changePassword(e) {
        e.preventDefault();

        const changePassword = {currentPassword, newPassword, confirmNewPassword}
        console.log(changePassword)
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
                                <label className="form-label">Current Password</label>
                                <input  type='text'
                                        name='currentPassword'
                                        value={currentPassword}
                                        className="form-control"
                                        onChange={handelCurrentPassword}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">New Password</label>
                                <input  type='text'
                                        name='newPassword'
                                        value={newPassword}
                                        className="form-control"
                                        onChange={handleNewPassword}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Confirm New Password</label>
                                <input  type='text'
                                        name='confirmNewPassword'
                                        value={confirmNewPassword}
                                        className="form-control"
                                        onChange={handleConfirmNewPassword}>
                                </input>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="container d-flex">
                            <button className="btn btn-primary align-self-center" onClick={changePassword}>CHANGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}