import React from 'react';
import './Drum.css';

class Drum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: ''
    }
  }
  
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  
  onKeyDown = (e) => {
    const key = String.fromCharCode(e.keyCode);
    this.playSound(key);
 }
  
  playSound = (id) => {
    const sound = document.getElementById(id);
    if (sound) {
      const name = sound.getAttribute('name');
      sound.play();
      this.setState({
       playing: name
      });
    }
    else return; 
  }
  
  render() {
    return (
      <div id='drum-machine'>
        <div className='flex'>
          <h1 className='title'>
            Drum Kit</h1>
          <h2 id='display'>
            {this.state.playing}</h2>
        </div>
        <div id='kit'>
          {pads.map(p => {
            return <Pad 
              key={p.name} 
              url={p.url} 
              label={p.keyTrigger} 
              name={p.name}
              playSound={this.playSound}/>
            })}
         </div>
      </div>
    )
  }
}

const Pad = (props) => {
  return (
    <div id={props.name} className='drum-pad' onClick={() => props.playSound(props.label)}>
      {props.label}
      <audio 
        id={props.label}
        src={props.url}
        className='clip' 
        name={props.name} />
    </div>
  )
}

const pads = [{
    keyCode: 81,
    keyTrigger: 'Q',
    name: 'uno',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    name: 'dos',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    name: 'tres',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    name: 'cuatro',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    name: 'cinco',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    name: 'seis',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    name: "siete",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    name: 'ocho',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    name: 'nueve',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

export default Drum;
