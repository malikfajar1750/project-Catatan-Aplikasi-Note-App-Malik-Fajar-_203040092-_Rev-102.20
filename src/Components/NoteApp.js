import React from 'react';
import Notelist from './Notelist';
import { getInitialData} from "../ultilites/data"
import NoteInput from './Noteinput';



class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Note: getInitialData(),
      
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  
  }
  
  onDeleteHandler(id) {
    const Note = this.state.Note.filter(Note=> Note.id !== id);
    this.setState({ Note });
  }


  onAddNoteHandler({title, body,}) {
    this.setState((prevState) => {
    
      return {
        Note: [
          ...prevState.Note,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,    
         
          }
        ]
      }
    });
  }
  

  render() {
    
    
    return (

      <div className="Note-app">
        <h1> Catatan Ku</h1>
        
        <h2>Tambah Catatan</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Daftar Catatan</h2>
        <Notelist Note={this.state.Note} onDelete={this.onDeleteHandler} />
        { this.state.Note.length === 0 && <p className='Note-Found'>Tidak Ada Catatan</p> }
      </div>
    );
  }
 }
  
 export default NoteApp;