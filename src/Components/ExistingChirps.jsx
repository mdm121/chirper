import React from 'react';
import Avatar from './IMG_0021.JPG';


const ExistingChirps = (props) => {
    return (
        <React.Fragment>
            <div class="card" style={{width: '18rem', alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <img 
                    class="card-img-top"
                    alt="Avatar" 
                    src={Avatar}
                    style={{ height: '200px', width: '150px' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">Hit me on my Nextel Chirp</p>
                </div>
            </div>

            <div class="card" style={{width: '18rem', alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <img 
                    class="card-img-top"
                    alt="Avatar" 
                    src={Avatar}
                    style={{ height: '200px', width: '150px' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">This lab is really hard.</p>
                </div>
            </div>

            <div class="card" style={{width: '18rem', alignItems: 'center', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                <img 
                    class="card-img-top"
                    alt="Avatar"
                    src={Avatar} 
                    style={{ height: '200px', width: '150px' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">I still can't figure it out, but life wont always be like this!!!!!!</p>
                </div>
            </div>


        </React.Fragment>

    );
};

export default ExistingChirps;