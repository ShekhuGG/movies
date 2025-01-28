import React, { useState, useEffect } from "react";
import MovieCard from "./moviecard.js"

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [found, setFound] = useState(false);
    const [movies, setMovies] = useState([]);
    const [input, setInput] = useState('');
    let movieElems = [];

    useEffect(() => {
        if (input === '') return;
        let arr;
        console.log("e.value changed now: ", input)
        const fetchMovies = async () => {
            try {
                setLoading(false)
                setFound(false)
                console.log("loading...")
                const response = await fetch(
                    `https://imdb.iamidiotareyoutoo.com/search?q=${input}`
                );
                const data = await response.json();
                console.log(data)
                setMovies(data.description)
            } catch (err) {
                console.error("MY ERROR: ", err)
                setLoading(true)
            }
        };
        fetchMovies();
        console.log(loading ? "Not loaded..." : "Loaded...")

    }, [input])



    return (<div id='searchBox'>
        <input type='text' placeholder="Search Unlimited Movies..." onChange={(e) => setInput(e.target.value)}></input>
        {movies.forEach(v => movieElems.push(<div style={{ color: "white" }}>jk</div>))}
        <div id='moviesContainer'>
            {movies.map(v => <MovieCard movie={v} />)}
        </div>
    </div >)

}

export default Search;