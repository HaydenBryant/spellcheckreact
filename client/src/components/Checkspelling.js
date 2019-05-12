import React, { Component } from 'react';

class SpellCheck extends Component {
    render(){
        return(
            <div className="container">
                <h2 className="center red">Check your Spelling</h2>
                <textarea rows="15" cols="50" id="user-input" placeholder="Input Your Text Here" />
                <button type="submit">Submit</button>
                <p>This will be the SpellCheck results</p>
            </div>
        )
    }
}

export default SpellCheck