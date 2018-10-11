import React from 'react';
import Avatar from './IMG_0021.JPG';


const ExistingChirps = (props) => {
    return (
        <React.Fragment>
        <div className="d-flex align-items-center justify-content-around ">
            <div class="card align-items-center justify-content-center" style={{width: '18rem', textAlign: 'center' }}>
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

            <div class="card align-items-center justify-content-center" style={{width: '18rem', textAlign: 'center' }}>
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

            <div class="card align-items-center justify-content-center" style={{width: '18rem', textAlign: 'center' }}>
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
        </div>

        </React.Fragment>

    );
};

export default ExistingChirps;