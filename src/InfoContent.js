import React, { Component } from 'react';
import Work from './Work';
import Education from './Education';
import Projects from './Projects';

class InfoContent extends Component {
  constructor(props) {
    super(props);

    props.onRef(this);

    this.contents = {
      work: <Work />,
      education: <Education />,
      projects: <Projects />
    };

    this.state = {content: this.contents.work};
    this.setContent = this.setContent.bind(this);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.state.content}
      </div>
    );
  }

  setContent(content) {
    let contentValid = false;

    for (let [key, value] of Object.entries(this.contents)){
      if (content === value) {
        contentValid = true;
      }
    }

    if (!contentValid) {
      throw Error('Invalid argument given, value from object contents in InfoContent expected');
    }

    this.setState({content: content});
  }
}

export default InfoContent;