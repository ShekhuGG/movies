import React from "react";
import Hero from "./hero.js"
import Search from "./search.js"

 

const home = ({current}) => {

    return (<div id="home"> 
        <Hero />
        <Search />  

    </div>)
}

export default home;