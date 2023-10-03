import { useState } from 'react'
import './App.css'
import Card from './component/Card'
import Form from './component/form'
import PageForm from './component/PageForm'
import PageGender from './component/PageGender'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<PageForm/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
    </Router>
    {/* <PageGender/> */}
    {/* <PageForm/> */}
    {/* <Card/> */}
    </>
  )
}

export default App
