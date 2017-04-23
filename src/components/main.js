import React from 'react';

import Navigation from 'navigation';
import Footer from 'footer';


let Main = React.createClass({
    render: function() {
        return (
            <div>
                <Navigation/>
                    <header>
                        <h1>Main</h1>
                    </header>
                    <div id="loader-wrapper">
                        <div id="loader"></div>
                    </div>
                <Footer/>
            </div>
        );
    }
});

module.exports = Main;
