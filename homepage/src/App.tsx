import React from 'react';
import { Linkedin, EnvelopeAtFill, Github } from 'react-bootstrap-icons';



function App() {
  return (
    <div className="App">

      <div className='middle-container'>
        <h1>Welcome to my homepage</h1>
        <p>My name is Eskil Ekaas Schjong, and I am a software developer. <br /> I am currently studying applied computer science at OsloMet</p>
        <div className='personal-projects-container'>
          <div className='personal-projects-bg'>
            <h2>Have a look at my personal projects!</h2>
            <a href="https://eskilschjong.github.io/tr">Liars Bar Companion app</a>
            <a href="https://eskilschjong.github.io/gambling/blackjack">Blackjack</a>
            <a href="https://eskilschjong.github.io/gambling/multiplier">Multiplier Time</a>
            <h3>Coming soon</h3>
            <div className='coming-soon'>2D Basketball Game</div>
          </div>
        </div>
        <div className='socials'>
          <a href="https://www.linkedin.com/in/eskilschjong" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://github.com/eskilschjong" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="mailto:eskil.schjong@hotmail.no" target="_blank" rel="noopener noreferrer">
            <EnvelopeAtFill />
          </a>  
        </div>
      </div>
    </div>
  );
}

export default App;
