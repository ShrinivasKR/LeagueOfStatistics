import React, { Component } from 'react';
import leagueSVG from './league_game_icon.svg';
import statisticsSVG from './statistics.svg';

class Logo extends Component {
  render() {
    const styleSVG = {
      height: this.props.height,

    };
    const styleText = {
      fontSize: this.props.height,
      color: 'red'
    }
    return (
      <div>
        <img src={leagueSVG} alt="League icon logo" style={styleSVG}/>
        <text style={styleText}>of</text>
        <img src={statisticsSVG} alt="Statistics logo" style={styleSVG} />
      </div>
    );
  }
}

export default Logo;