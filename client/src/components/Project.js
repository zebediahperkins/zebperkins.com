import React from 'react';

export default function Project(props) { //props.imgLink must link to a 900x740 photo
    return(
        <div className='project'>
            <h2>{props.name}</h2>
            <a href={props.redirectLink}><img src={props.imgLink} alt='Thumbnail' /></a>
            <p>{props.description}</p>
        </div>
    );
}