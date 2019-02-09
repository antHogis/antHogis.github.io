import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import InfoContent from './InfoContent';
import './App.css';

class App extends Component {
   render() {
    return (
      <div className="App">
        <div className="Mid">
          <div className="Header">
            <h1>Amtom Böglund</h1>
          </div>
          <div className="Welcome">
            <img 
              src="https://i.imgur.com/tOskIOX.png" 
              alt="The cutest boi in town."
              className="FadeIn ProfilePicture">
            </img>
            <div className="Console">
              <Typing speed={50}>
                <span className="TypeWriter">
                  Hei, rekry tylleröt ja poikerot, ottakaa mut töihin.
                </span>
              </Typing> 
            </div>
          </div>
          <div className="NavBar">
            <div 
              className="NavItem"
              onClick={(e) => 
                this.navItemClicked(e, this.infoContent.contents.work)}>
              Työkokemus
            </div>
            <div 
              className="NavItem"
              onClick={(e) => 
                this.navItemClicked(e, this.infoContent.contents.education)}>
              Koulutus
            </div>
            <div 
              className="NavItem"
              onClick={(e) => 
                this.navItemClicked(e, this.infoContent.contents.projects)}>
              Projektit
            </div>
          </div>
          <InfoContent
            className="InfoContent"
            onRef={(ref) => this.infoContent = ref}
          />
        </div>
      </div>
    );
  }

  navItemClicked(event, content) {
    event.preventDefault();
    
    this.infoContent.setContent(content);
  }
}

export default App;