import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios'

const Login = () => {
    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px'
        },
        form: {
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
        },
        inputContainer: {
          marginBottom: '15px',
        },
        input: {
          width: '100%',
          padding: '8px',
          fontSize: '16px',
        },
        button: {
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        },
        error: {
          color: 'red',
        },
      };
      const [inputValue, setInputValue] = useState('')
      const [inputPass, setPassword] = useState('')
      const navigate = useNavigate();

      const handleEmail = (event) => {
        setInputValue(event.target.value)
      }
      const handlePass = (event) => {
        setPassword(event.target.value)
      }
      /* const handleSubmit = (event) => {
        event.preventDefault();
        if(inputValue === "karthi@gmail.com" && inputPass === "."){
            console.log("welcome to new world")
            navigate('/dashboard', { state: { inputValue } });
        }else{
            alert('Invalid username or password');
        }
      } */
      const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await axios.get(`https://localhost:7285/api/GetSingleUser?Email=${encodeURIComponent(inputValue)}`)
            console.log("above")
            console.log(response.data)
            if(response.data && response.data.userName){
                console.log("welcome to new world")
                navigate('/dashboard', { state: { userName: response.data.userName} });
            }else{
                alert('Invalid username or password');
            }
        }catch(error){
            console.error("Error logging in:", error);
            alert('Invalid username or password');
        }
      }

  return (
    
<div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} 
      style={styles.form}>
        <div style={styles.inputContainer}>
          <label>Email:</label>
          <input
            type="email"
            value={inputValue}
            onChange={handleEmail}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Password:</label>
          <input
            type="password"
            value={inputPass}
            onChange={handlePass}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <Footer/>
    </div>
  )
}

export default Login