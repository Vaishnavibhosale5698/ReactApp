import React, { Component } from 'react';
import {  TextField } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import brush from '../assest/brush.svg'
import image from '../assest/image.svg'
import tick from '../assest/tick.svg'
import './NoteComponent.scss'

class NoteComponent extends Component {
  constructor(props){
    super(props)
  }

    writeNote = () =>{
        console.log('asdfghjkjhgfds')
        this.props.openAddNoteView()
    }
  render() {
    return (
       
          <div className = "Note">
          {/* <h3 style= {{width : '60%',marginLeft:'5%'}}>Take a note...</h3>  */}
          <div className ="textCSS">
          <TextField
            onClick ={this.writeNote}
            InputProps={{
            disableUnderline: true
             }}
            placeholder="Take a note..."
         />
          </div>
          

    <div style={{width : '40%',display :'flex',justifyContent:'flex-end'}}>
      <Tooltip title="Refresh">
        <Button><img src={tick} className="logo" alt="logo" /></Button>
      </Tooltip>

      <Tooltip title="List View">
        <Button> <img src={brush} className="logo" alt="logo" /></Button>
      </Tooltip>

      <Tooltip title="Settings">
        <Button><img src={image} className="logo" alt="logo" /></Button>
      </Tooltip>

    </div>

      </div>
    );
  }
}

export default NoteComponent;
