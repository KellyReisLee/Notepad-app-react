
import './App.css'
import Header from './Components/Header';

import Notes from './Components/Notes'
import Form from './Components/Form'
import { useState, useEffect } from 'react';
import Editar from './Components/Editar';




function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('Notes')) || []
  )

  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(notes))
  }, [notes])


  const [mostrarEdit, setMostrarEdit] = useState(false);
  const [id, setId] = useState('');
  const [search, setSearch] = useState('');


  function handleEdit() {
    setMostrarEdit(() => !mostrarEdit)

  }


  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <div className='container-main'>
        <section className='section-notes'>
          {notes.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map((item) => (
            <Notes key={item.id} id={item.id} title={item.title} details={item.details} date={item.date} notes={notes} setNotes={setNotes} setMostrarEdit={setMostrarEdit} mostrarEdit={mostrarEdit} handleEdit={handleEdit} setId={setId} />
          ))}
        </section>
        <div className='form-edit-container'>
          <Form setNotes={setNotes} />
          {mostrarEdit && <Editar id={id} setNotes={setNotes} notes={notes} mostrarEdit={mostrarEdit} setMostrarEdit={setMostrarEdit} />}

        </div>

      </div>

    </>
  )
}

export default App
