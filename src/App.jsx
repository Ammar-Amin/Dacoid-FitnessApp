import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom'
import Ads from './components/Ads'
import Ads2 from './components/Ads2'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Goals from './components/Goals'
import Tracker from './components/Tracker'
import Schedule from './components/Schedule'
import Layout from './components/Layout'

function App() {


  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Ads />} />
        <Route path='ad2' element={<Ads2 />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<LogIn />} />
        <Route path='goal' element={<Goals />} />
        <Route path='tracker' element={<Tracker />} />
        <Route path='schedule' element={<Schedule />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App