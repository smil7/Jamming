import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import SearchBar from "../SearchBar/SearchBar.jsx";

function App() {

  return (
    <>
        <div className={styles.background}>
            <SearchBar />
        </div>
    </>
  )
}

export default App
