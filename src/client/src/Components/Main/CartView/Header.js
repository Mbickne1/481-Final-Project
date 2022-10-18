import React from 'react';

export default function Header(props) {
    return <header className = "row block center">
        <div>
            <a href = '#/'>
                <h1>Checkout Screen</h1>
            </a>
        </div>
        <div>
            <a href="#/back">Back</a> <a href = "#/home">Home</a>
        </div>
    </header>;
}