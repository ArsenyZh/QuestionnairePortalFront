import React,{ useState } from "react"
import { useNavigate } from 'react-router-dom'
import { changeUserPassword } from "../services/UserService"

export default function ChangePassword() {

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confNewPassword, setConfirmNewPassword] = useState('')

    const [passwordError, setPasswordError] = useState('')

    const navigator = useNavigate();

    function changePassword(e) {
        e.preventDefault();

        const changedPassword = {password, newPassword, confNewPassword}
        console.log(changedPassword);

        changeUserPassword(changedPassword).then((response) => {
            console.log(response.data);
            if (response.data === '') {
                setPasswordError('Password change failed, check entered data');
                console.log("Password change failed.");
                return;
            }
            navigator('/fields')
        }) 
    }

    return (
        <div className="container">
            <div className="row">
                <div className="card px-0 mx-auto my-5" style={{width: '400px'}}>
                    <div className="card-header">
                        <h3>Change Password</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Current Password</label>
                                <input  type='text'
                                        name='password'
                                        value={password}
                                        className="form-control"
                                        onChange={(e) => { setPassword(e.target.value); }}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">New Password</label>
                                <input  type='text'
                                        name='newPassword'
                                        value={newPassword}
                                        className="form-control"
                                        onChange={(e) => { setNewPassword(e.target.value); }}>
                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Confirm New Password</label>
                                <input  type='text'
                                        name='confirmNewPassword'
                                        value={confNewPassword}
                                        className="form-control"
                                        onChange={(e) => { setConfirmNewPassword(e.target.value); }}>
                                </input>
                                {passwordError && <div className="error">{passwordError}</div>}
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