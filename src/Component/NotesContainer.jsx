import React, { Component } from 'react';
import NoteComponent from './NoteComponent'
import EditNoteComponent from './EditNoteComponent'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Masonry from 'react-masonry-component';
import Note from './Note';
import NoteDataManager from '../NoteDataManager'

var userNotes = new NoteDataManager

const masonryOptions = {
    transitionDuration: 0
};

class NotesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleNoteView: false,
            note: '',
            title: '',
            notes: ''
        }
    }

    openAddNoteView = () => {
        console.log('inside open method')
        if (!this.state.toggleNoteView) {
            this.setState({
                toggleNoteView: !this.state.toggleNoteView
            })
        }
    }

    closeAddNoteView = async (note, title) => {
        console.log('CLOSEEEEEEE')
        if (this.state.toggleNoteView) {
            await this.setState({
                toggleNoteView: !this.state.toggleNoteView,
                title: title,
                note: note
            })
        }

        //console.log('on close note and title',title,this.state.note)
    }


     componentDidMount() {
        // firebase.database.database().ref('Notes').on('value', function (snapshot) {
        //     var userObject = snapshot.val()
        //     //userObj.push(userObject)
        //     console.log('all Notes from database',userObject)
        //   })

         userNotes.userNotes(async(response) => {
            console.log('Response in Datalayer', response)
          await  this.setState({
                notes: response
            })
        })

        console.log('12345',this.state.notes)
    }

    render() {
        console.log('notes object',this.state.notes)
        return (
            <div style = {{ width: '100%' , height: '30vh'}}>

                <ClickAwayListener onClickAway={this.closeAddNoteView}>
                    <div>
                        <div style={this.state.toggleNoteView === false ? { width: '100%' } : { display: 'none' }}>
                            <NoteComponent openAddNoteView={this.openAddNoteView} />
                        </div>


                        <div style={this.state.toggleNoteView === true ? { width: '100%' } : { display: 'none' }}>
                            <EditNoteComponent closeAddNoteView={this.closeAddNoteView} />
                        </div>
                    </div>
                </ClickAwayListener>

                
                    <Masonry style = {{marginLeft : '12.5%' ,display : 'flex',flexDirection: 'row', flexWrap: 'wrap', maxWidth : '75%' }}>
                   {
                        Object.getOwnPropertyNames(this.state.notes).map((key, index) => (
                            
                                    <Note 
                                     title={this.state.notes[key].title} 
                                     note={this.state.notes[key].note}
                                     listGridValue = {this.props.listGridValue}
                                    />                          
                        )
                        )
                    }
                    </Masonry>
   
            </div>
        );
    }
}

export default NotesContainer;
