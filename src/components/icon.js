import React from "react";

const icon = ({ link, id }) => {
    return (<img src={link} id={id} height={id == "main_icon3" ? '250vh' : '200vh'}></img>)
}

export default icon;