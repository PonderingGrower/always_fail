import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import Footer from './Footer.js';
import fail from './images/fail.png';
import quotes from './data/quotes.json';

function capitalize(text) {
    return text.replace(/\b./, m => m.toUpperCase());
}

class Generic extends Component {
  randomQuote () {
    return quotes[Math.floor(Math.random()*(quotes.length-1))];
  }

  getSubject () {
    const tokens = window.location.hostname.split('.');
    let subject = 'Something', plural = 's';
    if (tokens.length >= 3) {
      let words = tokens.slice(0, tokens.length - 2);
      subject = capitalize(words.join(' '));
      if (tokens[0] === 'i' || tokens[0].endsWith('s')) {
        plural = '';
      }
    }
    return `${subject} always fail${plural}.`;
  }

  render () {
    let quote = this.randomQuote();
    let subject = this.getSubject();
    return (
      <div className='generic'>
        <Helmet>
          <title>{subject}</title>
        </Helmet>
        <header className="App-header">
          <img src={fail} className="logo" alt="fail mark"/>
          <h1 className="App-title">{subject}</h1>
        </header>
        <br/>
        <div className="quote">
          <blockquote>
            {quote.text}
            <cite>{quote.author}</cite>
          </blockquote>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Generic;
