import React from 'react';
import Avatar from './IMG_0021.JPG';

const NewChirps = (props) => {
    return (
        <div class="card" style={{width: '18rem', alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <img 
                class="card-img-top" 
                src={Avatar}
                alt="Avatar"
                style={{ height: '200px', width: '150px'}} />
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.postText}</p>
            </div>
        </div>
    );
};

export default NewChirps;