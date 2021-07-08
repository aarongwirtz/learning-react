import React from 'react';
import '../../src/App.css';

function HelloWorld(props) {
        return(
            <div style={hwstyle}>
                <h1>Hello {props.name}.</h1>
            <div>
                <p className="paragraph-test">Please log in below.</p>
            </div>
            </div>
        )
    }

    const hwstyle = {
        fontSize: '1em',
        fontFamily: 'sans-serif',
        color: 'blue'
    }

export default HelloWorld;