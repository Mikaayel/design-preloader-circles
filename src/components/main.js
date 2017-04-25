import React from 'react';
import $ from "jquery";

import Navigation from 'navigation';
import Footer from 'footer';

$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 6000);

});

let Main = React.createClass({
    render: function() {
        return (
            <div>
                <Navigation/>
                    <header>
                        <h1>Main</h1>
                    </header>
                    <div id="loader--wrapper">
                        <div id="loader"></div>
                        <div className="loader--section section--left"></div>
                        <div className="loader--section section--right"></div>
                    </div>
                <Footer/>
            </div>
        );
    }
});

module.exports = Main;
