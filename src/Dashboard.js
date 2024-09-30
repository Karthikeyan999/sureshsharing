import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
const navigate = useNavigate()
   const dataAccess = () => {
    navigate('/dataaccess')
   }
   const userAccess =()=> {
    navigate('/useraccess')
   }
  return (
    <div>
        <Header/>  
        <div>
            <button onClick={dataAccess}>Data Access</button>
            <button onClick={userAccess}>User Access</button>
        </div>  
        <Footer/>
    </div>
  )
}

export default Dashboard