import Header from './components/Header'
import ListFields from './components/ListFields'
import AddField from './components/AddField'
import EditProfile from './components/EditProfile'
import ChangePassword from './components/ChangePassword'
import LoginForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm'
import ResponsesList from './components/ResponsesList'
import QuestionnaireForm from './components/QuestionnaireForm'
import Thanks from './components/Thanks'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element = {<LoginForm />}></Route>
            <Route path='/sign-up' element = {<SignUpForm />}></Route>
            <Route path='/fields' element = {<ListFields />}></Route>
            <Route path='/responses' element = {<ResponsesList />}></Route>
            <Route path='/add-field' element = {<AddField />}></Route>
            <Route path='/edit-profile' element = {<EditProfile />}></Route>
            <Route path='/change-password' element = {<ChangePassword />}></Route>
            <Route path='/domainname.com/questionnaires' element = {<QuestionnaireForm />}></Route>
            <Route path='/domainname.com/questionnaires/successes' element = {<Thanks />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}
