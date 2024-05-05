import Header from './components/Header'
import ListFields from './components/ListFields'
import AddField from './components/AddField'
import EditProfile from './components/EditProfile'
import ChangePassword from './components/ChangePassword'
import LoginForm from './components/LogInForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/'></Route>
            <Route path='/log-in' element = {<LoginForm />}></Route>
            <Route path='/fields' element = {<ListFields />}></Route>
            <Route path='/add-field' element = {<AddField />}></Route>
            <Route path='/edit-profile' element = {<EditProfile />}></Route>
            <Route path='/change-password' element = {<ChangePassword />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}
