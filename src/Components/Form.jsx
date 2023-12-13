import React from 'react'
import { useState } from 'react';
import useCreateDate from './useCreateDate'


function Form({ setNotes }) {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  let date = useCreateDate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const novaLista = {
        id: crypto.randomUUID(), title, details, date
      }
      setNotes(prevNotes => [novaLista, ...prevNotes])
    }

    setDetails('');
    setTitle('');
  }

  return (
    <section className='section-form'>
      <form onSubmit={handleSubmit} className='form'>
        <h2>Add Content here!</h2>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Title' required />
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} rows="10" cols="20" placeholder='Details...' required></textarea>
        <button className='btn-save'>Save</button>
      </form>



    </section>

  )
}

export default Form
