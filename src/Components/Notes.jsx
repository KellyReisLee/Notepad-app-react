import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";




function Notes({ notes, setNotes, handleEdit, id, setId, mostrarEdit, setMostrarEdit, title, details, date }) {


  function handleEdit() {
    setMostrarEdit(() => !mostrarEdit)
    setId(id)
  }

  function handleDelete() {

    if (window.confirm('Você tem certeza que quer deletar esse bloco? ')) {
      const newList = notes.filter(item => item.id !== id);
      setNotes(newList);
    }


  }



  return (
    <>
      <div className='container-note'>
        <div className='icons-del-edit'>
          <span><FaEdit onClick={handleEdit} size={25} className='icon-edit' /></span>
          <span> <IoIosCloseCircle onClick={handleDelete} size={25}
            className='icon-close' /></span>
        </div>

        <h4>Title: {title.length > 15 ? (title.substr(0, 15) + '...') : (title)}</h4>
        <div className='detail-text'>
          <p className='detail'>{details.length > 40 ? (details.substr(0, 40) + ' ...') : (details)}</p>
          <p className='date'>Date: {date}</p>
        </div>

      </div>




    </>


  )
}

export default Notes
