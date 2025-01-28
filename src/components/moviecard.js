import React from "react";

const styleContainer = {
    marginLeft: '5vw',
    color: 'white',
    width: '90vw',
    height: '50vh',
    marginBlock: '2vh',
    zIndex: '5',
    borderTopLeftRadius: "25px",
    borderBottomLeftRadius: "25px"
}


const moviecard = ({ movie }) => {


    // Log the props to check the structure 

    // You can access properties using bracket notation if the keys have special characters
    const aka = movie["#AKA"];
    const title = movie["#TITLE"];
    const year = movie["#YEAR"];
    const imdbURL = movie["#IMDB_URL"];
    const imdbID = movie["#IMDB_ID"];
    const imdbIV = movie["#IMDB_IV"];
    const poster = movie["#IMG_POSTER"];
    const rank = movie["#RANK"];
    const actors = movie["#ACTORS"];
    const arr = [aka, title, year, imdbURL, poster]
    let flag = true
    arr.forEach(v => { if (typeof (v) === 'undefined') { console.error("found error area"); flag = false } })

    const stylePoster = {
        minHeight: '50%',
        maxWidth: '250px',
        maxHeight: "100%",
        borderTopLeftRadius: "25px",
        borderBottomLeftRadius: "25px"
    }
    console.log(aka, title, year, imdbURL, poster
    )


    return (
        flag &&
        < div class='movie_card' style={styleContainer} >
            <img class='movie_card_poster' src={poster} style={stylePoster}></img>
            <div class='akaContainer'>
                <h4 class='movieAka' style={{ backgroundImage: `url(${poster})` }}>{aka}</h4>
            </div>
            <div class='movie-info-container'>
                <h3 class='movieRank movieAddInfo'><p className='infoType'>Rank :</p> <p className='info rank'>{rank}</p></h3>
                <h3 class='movieYear movieAddInfo'><p className='infoType'>Year Of Release :</p>  <p className='info year'>{year}</p></h3>
                <h3 class='movieImdbID movieAddInfo'><p className='infoType'>IMDB ID : </p> <p className='info imdbid'>{imdbID}</p></h3>
                <h3 class='movieImdbUrl movieAddInfo'><p className='infoType'>IMDB Url : </p><a href={imdbURL} className='info imdburl'>{imdbURL}</a></h3>
                <h3 class='movieImdbIv movieAddInfo'><p className='infoType'>IMDB Iv : </p><a href={imdbIV} className='info imdbiv'>{imdbIV}</a></h3>
                <h3 class='movieActors movieAddInfo'><p className='infoType'>Actor : </p>  <p className='info actors'>{actors}</p></h3>
            </div>
        </div >
    )
}

export default moviecard