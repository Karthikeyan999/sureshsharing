import Login from './Login'
import './App.css';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Dataaccess from './Dataaccess';
import Useraccess from './Useraccess';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dataaccess' element={<Dataaccess/>}/>
      <Route path='/useraccess' element={<Useraccess/>}/>
    </Routes>
   </Router>
  );
}

export default App;
