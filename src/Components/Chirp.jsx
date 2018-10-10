import React from 'react';
import NewChirps from './NewChirps';
import ExistingChirps from './ExistingChirps';
import PostChirp from './PostChirp';

class Chirp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [],
            name: '@SirChirpsALOT',
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }
    
    makeHeader() {
        return <h1>hello world</h1>
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.text);
        event.preventDefault();

        let postText = this.state.text;
        console.log(postText);
        this.setState({text: ''});

        return postText;
    }

    postChirp() {

    }

    render() {
        return (
            <React.Fragment>
                {this.makeHeader()}
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">NEW CHIRP:</label>
                        <input 
                            type="text" 
                            value={this.state.text} 
                            onChange={this.handleChange} 
                            class="form-control" id="textInput" aria-describedby="chirpHelp" 
                            placeholder="Type your chirp here" />
                        <small id="chirpHelp" class="form-text text-muted">Tell us what's on your mind!</small>
                    </div>
                    
                    <button type="submit" class="btn btn-primary" id="submit">Submit</button>
                </form>

                <ExistingChirps name={this.state.name}/>
                
                <NewChirps name={this.state.name} chirps={this.state.chirps} />
            </React.Fragment>
        );
    }


}

export default Chirp;
