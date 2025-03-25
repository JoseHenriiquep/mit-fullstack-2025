import React from "react";
import StarRating from "./Icon/Star";
import Rating from "./Icon/Rating";

 
const Icons = () => {
    return(
        <>
            <h2>My Icons</h2>
            <StarRating size={50} totalStar={5} title={"Qual a sua satisfação?"}/>
            <Rating size={50} totalStar={5} title={"Qual a sua satisfação?"}/> 
        </>
    );
}

export default Icons;