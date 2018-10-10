import React from 'react';
import NewChirps from './NewChirps';

const PostChirp = (props) => {
    return (
        <React.Fragment>

            <NewChirps name={props.name}/>
        </React.Fragment>
    );
};

export default PostChirp;