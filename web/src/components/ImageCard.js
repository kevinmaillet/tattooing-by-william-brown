import React from 'react';
import Img from 'gatsby-image';

const ImageCard = (props) => {


    return (
        <div className="imgContainer" >
            <a href={props.img.src} target="_blank" rel="noreferrer">
            <Img
            className="img"
            fluid={props.img}
            alt={props.alt}
            />
            </a>
        </div>
    )
}


export default ImageCard;