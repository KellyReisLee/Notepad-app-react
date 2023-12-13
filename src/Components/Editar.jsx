import React from 'react'
import useCreateDate from './useCreateDate';
import { useState } from 'react';


function Editar({ mostrarEdit, setMostrarEdit, notes, setNotes, id }) {

  const note1 = notes.find((item) => item.id === id);
  console.log(note1);
  const [title, setTitle] = useState(note1.title);
  const [details, setDetails] = useState(note1.details);
  const date = useCreateDate();

  function handleEdit(e) {
    e.preventDefault();
    setMostrarEdit(!mostrarEdit)

    //console.log(note1);
    if (title && details) {
      const newNote = {
        ...note1, title, details, date
      }
      console.log(newNote);
      const newNotes = notes.map((item) => {
        if (item.id === id) {

          item = newNote
        }
        return item
      })
      setNotes(newNotes)
    }

  }




  return (
    <>
      <section className='section-form-edit'>
        <form onSubmit={handleEdit} className='form'>
          <h2>Edit Content here!</h2>
          <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Title' required />
          <textarea
            value={details} onChange={(e) => setDetails(e.target.value)}
            rows="10" cols="20" placeholder='Details...' required></textarea>
          <button className='btn-save'>Save</button>
        </form>
      </section>
    </>
  )
}

export default Editar
