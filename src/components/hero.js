import React from "react";
import Icon from "./icon.js"

const props = {
    link1: "https://th.bing.com/th/id/OIP.cDWz2koa_HRVKtEs06G0ogHaK-?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7", id1: "main_icon1",
    link2: "https://th.bing.com/th/id/OIP.H2oVPIv_qhEjwHO8QM5mUQHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3", id2: "main_icon2",
    link3: "https://th.bing.com/th/id/OIP.f3qT_HydZUxDBYcJnzpdzAHaK5?w=206&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7", id3: "main_icon3"
}

const hero = () => {
    return (<div id="hero">
        <Icon link={props.link1} id={props.id1} /> 
        <Icon link={props.link2} id={props.id2} /> 
        <Icon link={props.link3} id={props.id3} /> 
    </div >)
}

export default hero;