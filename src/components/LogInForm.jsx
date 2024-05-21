import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { authUser } from '../services/AuthService';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate();

  function logIn(e) {
    e.preventDefault()

    const user = {email, password}

    authUser(user).then((response) => {
        console.log(response.data);
        navigator('/fields')
    }) 
  }

  return (
    <div className="container">
        <div className="row">
            <div className="card px-0 mx-auto my-5" style={{width: '400px'}}>
                <div className="card-header">
                    <h3>Log In</h3>
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
                    </form>
                </div>
                <div className="card-footer">
                    <div className="container d-flex">
                        <button className="btn btn-primary align-self-center" onClick={logIn}>LOG IN</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};