import {React, useEffect, useState} from "react";
import MovieCard from "./component/MovieCard";
import './App.css';
import SearchIcon from './search.svg'

const API_KEY = 'http://www.omdbapi.com?apikey=179bd12a';

// const show1 = {
//     "Title": "Batman: The Animated Series",
//     "Year": "1992–1995",
//     "imdbID": "tt0103359",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
// }

const App = () => {

    const [shows, setShows] = useState([]);
    const [search, setSearch] = useState('');

    const searchShow = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`)
        const data = await response.json()
        setShows(data.Search)
    }

    // useEffect(() => {
    //     searchShow('no way home')
    // },[]);

    return(
       <div className="app">
        {/* <h1>ShowLanding</h1> */}

        <div className="search">
            <input
                placeholder="Search for movies"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchShow(search)}
            />
        </div>

        {
            shows?.length > 0 
            ? (
                <div className="container">
                    {shows.map((show) => (
                        <MovieCard movie={show} />
                    ))}
                    
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )  
        }

       
       </div>
    )
}

export default App