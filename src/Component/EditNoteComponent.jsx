import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import reminder from '../assest/reminderalarm.svg';
import colorplate from '../assest/colorplate.svg';
import image from '../assest/image.svg'
import archive from '../assest/archive.svg'
import morevert from '../assest/more.svg'
import pin from '../assest/pin.svg'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import './EditNoteComponent.scss';
import firebase from '../../src/Firebase'

var noteObj;
class EditNoteComponent extends Component {
  constructor(props) {
    super(props)
    this.state ={
      title : '',
      note : ''
    }
  }

  handleTitle= ({ target }) => {
    this.setState({ title : target.value });
    console.log('note and Title',this.state.title ,'\n',this.state.note)
 }

 handleNote= ({ target }) => {
  this.setState({ note : target.value });
  console.log('note and Title',this.state.title ,'\n',this.state.note)
};

  closeAddNoteView = () => {
    console.log('Inside CLOSE')
    this.props.closeAddNoteView(this.state.title,this.state.note)
    this.setState({
      title : '',
      note : ''
    })

    noteObj = {
      title: this.state.title,
      note: this.state.note
    }
    
    firebase.database.database().ref('Notes').push(noteObj)
  }

  render() {
    return (

      <div className="editNoteContainer">
        <div style = {{width : '95%',display:'flex',flexDirection:'row'}}>
        <TextField
          style={{ width: '95%', zIndex: 1, paddingTop: '10px' }}
          InputProps={{
            disableUnderline: true
          }}
          placeholder="Title"
          value = {this.state.title}
          onChange = {this.handleTitle}
        />

        <Tooltip title="Pin note">
           <IconButton><img src={pin} className="logo" alt="logo" /></IconButton>
        </Tooltip>

         </div>

        <TextField
          style={{ width: '95%' }}
          InputProps={{
            disableUnderline: true,
            autoFocus: true
          }}
          multiline={true}
          placeholder="Take a note..."
          value = {this.state.note}
          onChange = {this.handleNote}
        />

        <div style={{ width: '95%', position: 'relative', display: 'flex', backgroundColor: '', justifyContent: 'space-between', top: '10px', flexDirection: 'row' }}>
          <div>
            <Tooltip title="Remind me">
              <IconButton><img src={reminder} className="logo" alt="logo" /></IconButton>
            </Tooltip>

            <Tooltip title="Collaborator">
              <PersonAddOutlinedIcon className="logo"/>
            </Tooltip>

            <Tooltip title="Change Color">
              <IconButton><img src={colorplate} className="logo" alt="logo" /></IconButton>
            </Tooltip>

            <Tooltip title="Add Image">
              <IconButton><img src={image} className="logo" alt="logo" /></IconButton>
            </Tooltip>

            <Tooltip title="Archive">
              <IconButton><img src={archive} className="logo" alt="logo" /></IconButton>
            </Tooltip>

            <Tooltip title="More">
              <IconButton><img src={morevert} className="logo" alt="logo" /></IconButton>
            </Tooltip>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={this.closeAddNoteView}>Close</Button>
          </div>

        </div>
      </div>

    );
  }
}

export default EditNoteComponent;
