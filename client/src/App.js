import React, { createContext, useReducer } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Errorpage from './components/Errorpage';
import { reducer, initialstate } from './reducer/Reducer'
export const UserContext = createContext();

const App = () => {

  const Roters = () => {
    return (
      <Routes>
        {/* <Switch> */}
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contect" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<Logout />} />
        <Route path='*' element={< Errorpage />} />
        {/* </Switch> */}
      </Routes>
    )
  }

  /***** useReducer ******/
  const [state, dispatch] = useReducer(reducer, initialstate)

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Roters />
      </UserContext.Provider>

    </>
  )
}

export default App