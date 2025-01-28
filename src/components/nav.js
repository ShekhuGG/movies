import React, { useState } from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    const [path, setPath] = useState("Home")
    return (<div id="nav">
        <Link onClick={() => setPath("Home")} className={`tag ${(path == "Home") ? "glow" : ""}`} to="/">Home</Link>
        <Link onClick={() => setPath("About")} className={`tag ${(path == "About") ? "glow" : ""}`} to="/about">About</Link>
        <Link onClick={() => setPath("Premium")} className={`tag premium ${(path == "Premium") ? "glow" : ""}`} to="/premium">Get Premium</Link>
    </div>)
}

export default Nav;