import React , {useContext} from 'react'
import noteContext from '../contexts/notes/noteContext';
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
    const {note,updateNote} = props;
  return (
    <div className='col-md-3'>
        <div className='card my-3 border-dark'>
            <div className='card-body text-dark'>
                <h5 className='card-title'>{note.title}</h5>
                <p className='card-text'>{note.description}</p>
                
                <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted successfullly","success");}}></i>
                <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
            </div>
        </div>
    </div>
  )
}

export default NoteItem