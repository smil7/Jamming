import { useState } from 'react'
import searchIcon from '../../assets/icons8-search.svg'
import styles from './SearchBar.module.css'

export default function SearchBar() {
    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const searchForSong = () => {
        alert('Searching for song: ' + search);
    }

    return(
        <>
            <div className={styles.container}>
                <input name="query" placeholder="Search by name" value={search} onChange={handleInputChange} className={styles.searchBar} />
                <img src={searchIcon} alt="Search icon" onClick={searchForSong} className={styles.searchIcon} />
            </div>
        </>
    )
}