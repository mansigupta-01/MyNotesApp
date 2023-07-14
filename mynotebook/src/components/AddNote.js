import React, { useState , useContext} from 'react'
import noteContext from '../contexts/notes/noteContext';
const AddNote = (props) => {
    const context = useContext(noteContext);
  const {addNote} = context;

  const [note,setNote]=useState({title: "", description: "", tag: ""})
  const handleClick =(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({title: "", description: "", tag: ""})
    props.showAlert("Added successfullly","success");
  }
  const onChange =(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div className='container my-3'>
        <h1>Add a Note</h1>
        <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" onChange={onChange} id="title" value={note.title} name="title" aria-describedby="emailHelp" minLength={5} required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" onChange={onChange} className="form-control" id="description" value={note.description} name="description" minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" onChange={onChange} className="form-control" id="tag" value={note.tag} name="tag" minLength={5} required/>
  </div>
  <button type="submit" disabled={note.title.length<5 || note.description.length<5} className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>

        
        
    </div>
  )
}

export default AddNote