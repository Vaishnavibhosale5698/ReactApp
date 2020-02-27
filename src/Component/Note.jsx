import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import reminder from '../assest/reminderalarm.svg';
import colorplate from '../assest/colorplate.svg';
import image from '../assest/image.svg'
import archive from '../assest/archive.svg'
import morevert from '../assest/more.svg'
import pin from '../assest/pin.svg'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import './Note.scss';

class Note extends Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      // <div className="mainNoteContainer">
      <div className={this.props.listGridValue === true ? "NoteContainer" : "gridContainer"}
      onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover} >

        <div style={this.props.listGridValue === true ? { width: '95%', display: 'flex', flexDirection: 'row'} : {width :'100%',display : 'flex', flexDirection: 'row',backgroundColor: 'lightblue'}}>
          <TextField
            style={{ marginLeft : 10,width: '100%', paddingTop: '10px', fontWeight: 'bold' }}
            InputProps={{
              disableUnderline: true
            }}
            // disabled = {true}
            value={this.props.title}
          />

         {this.state.isHovering && <div>
          <Tooltip title="Pin note">
            <IconButton><img src={pin} className={this.props.listGridValue === true ? "logo" : "gridLogo"} alt="logo" /></IconButton>
          </Tooltip>
          </div>}
        </div>

        <TextField
          style={{ marginLeft : 10, width: '95%' }}
          InputProps={{
            disableUnderline: true,
          }}
          multiline={true}
          value={this.props.note}
        />


        {
          this.state.isHovering && <div style={{ width: '95%', position: 'relative', display: 'flex', backgroundColor: '', justifyContent: 'space-between', top: '10px', flexDirection: 'row' }}>
            <div>
              <Tooltip title="Remind me">
                <IconButton><img src={reminder} className={this.props.listGridValue === true ? "Logo" : "gridLogo"} alt="logo" /></IconButton>
              </Tooltip>

              <Tooltip title="Collaborator">
                <PersonAddOutlinedIcon className={this.props.listGridValue === true ? "Logo" : "gridLogo"} />
              </Tooltip>

              <Tooltip title="Change Color">
                <IconButton><img src={colorplate} className={this.props.listGridValue === true ? "Logo" : "gridLogo"} alt="logo" /></IconButton>
              </Tooltip>

              <Tooltip title="Add Image">
                <IconButton><img src={image} className={this.props.listGridValue === true ? "Logo" : "gridLogo"} alt="logo" /></IconButton>
              </Tooltip>

              <Tooltip title="Archive">
                <IconButton><img src={archive} className={this.props.listGridValue === true ? "Logo" : "gridLogo"} alt="logo" /></IconButton>
              </Tooltip>

              <Tooltip title="More">
                <IconButton><img src={morevert} className={this.props.listGridValue === true ? "Logo" : "gridLogo"} alt="logo" /></IconButton>
              </Tooltip>
            </div>

          </div>
        }
      </div>
      // </div>
    );
  }
}

export default Note;
