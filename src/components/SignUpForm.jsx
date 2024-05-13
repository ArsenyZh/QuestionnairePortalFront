import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../services/AuthService';

export default function SignUpForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [emailError, setEmailError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const navigator = useNavigate();

  function signUp(e) {
    e.preventDefault()

    if (!email) {
        setEmailError('Check email input');
        console.log("Email entered failed.");
        return;
    }
    if (password.trim() === '' || confPassword.trim() === '' || password !== confPassword) {
        setConfirmPasswordError('Check passwords input');
        console.log("Email entered failed.");
        return;
    }

    const user = {email, password, confPassword, firstName, lastName, phoneNumber}
    console.log(user);

    signUpUser(user).then((response) => {
        console.log(response.data);
        navigator('/fields')
    }) 
  }

  return (
    <div className="container">
        <div className="row">
            <div className="card px-0 mx-auto my-5" style={{width: '400px'}}>
                <div className="card-header">
                    <h3>SIGN UP</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label">Email</label>
                            <input  type='text'
                                    name='email'
                                    value={email}
                                    className="form-control"
                                    onChange={(e) => {setEmail(e.target.value);}}>
                            </input>
                            {emailError && <div className="error">{emailError}</div>}
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">Password</label>
                            <input  type='password'
                                    name='password'
                                    value={password}
                                    className="form-control"
                                    onChange={(e) => {setPassword(e.target.value);}}>
                            </input>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">ConfPassword</label>
                            <input  type='password'
                                    name='confPassword'
                                    value={confPassword}
                                    className="form-control"
                                    onChange={(e) => {setConfPassword(e.target.value);}}>
                            </input>
                            {confirmPasswordError && <div className="error">{confirmPasswordError}</div>}
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">FirstName</label>
                            <input  type='text'
                                    name='firstName'
                                    value={firstName}
                                    className="form-control"
                                    onChange={(e) => {setFirstName(e.target.value);}}>
                            </input>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">LastName</label>
                            <input  type='text'
                                    name='lastName'
                                    value={lastName}
                                    className="form-control"
                                    onChange={(e) => {setLastName(e.target.value);}}>
                            </input>
                        </div>

                        <div className="form-group mb-2">
                            <label className="form-label">PhoneNumber</label>
                            <input  type='text'
                                    name='phoneNumber'
                                    value={phoneNumber}
                                    className="form-control"
                                    onChange={(e) => {setPhoneNumber(e.target.value);}}>
                            </input>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="container d-flex">
                        <button className="btn btn-primary align-self-center" onClick={signUp}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};