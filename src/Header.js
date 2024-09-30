import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const styles = {
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
        },
        logo: {
          fontSize: '24px',
          fontWeight: 'bold',
        },
        exit:{
            fontSize: '24px',
            fontWeight: 'bold',
        },
        navList: {
          listStyleType: 'none',
          display: 'flex',
          gap: '15px',
        },
        navItem: {
          fontSize: '18px',
        },
        navLink: {
          textDecoration: 'none',
          color: '#fff',
          transition: 'color 0.3s ease',
        },
      };
      const location = useLocation()
      const navigate = useNavigate()
      const { userName } = location.state || {};
      const handleClick = () => {
        navigate('/')
      }
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Welcome, {userName ? userName : 'Guest'}! </div>
      <button onClick = {handleClick} style={styles.exit}>Sign Out</button>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header