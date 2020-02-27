import React, { Component } from 'react';
import './DashBoard.css';
import menu from '../assest/menuIcon.svg'
import search from '../assest/search.svg'
import refresh from '../assest/refresh.svg'
import list from '../assest/list.svg'
import settings from '../assest/settings.svg'
import { Input, TextField } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
// import Avatar from '@material-ui/core/Avatar';
import Avatar from 'react-avatar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import ResponsiveDrawer from './TemporaryDrawer'

class DashBoard extends Component {
  render() {
    return (
      <div className="DashBoard">

        <div style={{ width: '15%' }}>
          <Tooltip title="Main Menu">
            <Button>
              <img src={menu} className="logo" alt="logo" onClick={() => { console.log('menu clicked') }} />
            </Button>
          </Tooltip>

          <div className="text">
            Fundoo Notes
          </div>
        </div>

        <div className="searchNote">
          <Tooltip title="Search">
            <Button > <img src={search} className="logo" alt="logo" /></Button>
          </Tooltip>
          <TextField
            InputProps={{
              disableUnderline: true
            }}
            placeholder="search your note"
            className="searchText" />
        </div>

        <div style={{ width: '20%', backgroundColor: '' }}>
          <Tooltip title="Refresh">
            <Button><img src={refresh} className="logo" alt="logo" /></Button>
          </Tooltip>

          <Tooltip title="List View">
            <Button> <img src={list} className="logo" alt="logo" /></Button>
          </Tooltip>

          <Tooltip title="Settings">
            <Button><img src={settings} className="logo" alt="logo" /></Button>
          </Tooltip>

          <Tooltip title="Fundoo Account">
            {/* <img src={account} className="logo" alt="logo" /> */}
            {/* <Avatar>H</Avatar> */}
            <Avatar name="V B" size="40" round={true} />
          </Tooltip>

        </div>

      </div>
    );
  }
}

export default DashBoard;
