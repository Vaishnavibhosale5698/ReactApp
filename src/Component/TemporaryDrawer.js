import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './DashBoard.css';
import menu from '../assest/menuIcon.svg'
import search from '../assest/search.svg'
import refresh from '../assest/refresh.svg'
import list from '../assest/list.svg'
import settings from '../assest/settings.svg'
import {  TextField } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from 'react-avatar';
import NotesContainer from './NotesContainer';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  
  fullList: {
    width: 'auto',
  },
  drawer:{
    '& .MuiDrawer-paper' : {
      top : '4.5em'
    }
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false,});
  const [listGrid, toggleListGrid] =React.useState(false)

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const toggleListToGrid = () =>{
    if(!listGrid){
      toggleListGrid(!listGrid)
    }
    else{
      toggleListGrid(!listGrid)
    }
    console.log('listGrid value',listGrid)
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    // <div>
    //   <Button onClick={toggleDrawer('left', true)}>Open Left</Button>     
    //   <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
    //     {sideList('left')}
    //   </Drawer>
    // </div>
  <div>
    <div className="DashBoard">

    <div style={{ width: '15%', display:'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Tooltip title="Main Menu">
        <Button onClick = {toggleDrawer('left',true)}>
          <img src={menu} className="logo" alt="logo" onClick={() => { console.log('menu clicked') }} />
        </Button>
      </Tooltip>

      <Drawer variant = 'persistent' className = {classes.drawer} open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>

      {/* <div className="text"> */}
        {/* Fundoo Notes */}
        <div style = {{display : 'flex', flexDirection : 'row', width : 'auto'}}>
                     <div style={{color: '#4285F4',fontSize:30,fontWeight:'bold'}}>  
                         F
                    </div>

                    <div style={{color: '#DB4437',fontSize:30,fontWeight:'bold'}}>  
                       u
                    </div>

                    <div style={{color: '#F4B400',fontSize:30,fontWeight:'bold'}}>  
                       n
                    </div>
                    
                    <div style={{color: '#4285F4',fontSize: 30,fontWeight:'bold'}}>  
                         D
                    </div>

                    <div style={{color: '#0F9D58',fontSize:30,fontWeight:'bold'}}>  
                         o
                    </div>

                    <div style={{color: '#DB4437',fontSize:30,fontWeight:'bold'}}>  
                        o
                    </div>
                                          
                   </div> 
      {/* </div> */}
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

    <div style={{ width: '20%', zIndex : 1 }}>
      <Tooltip title="Refresh">
        <Button><img src={refresh} className="logo" alt="logo" /></Button>
      </Tooltip>

      <Tooltip title="List View">
        <Button onClick ={toggleListToGrid}> <img src={list} className="logo" alt="logo" /></Button>
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

<NotesContainer listGridValue ={listGrid}/>

</div>

  );
}
