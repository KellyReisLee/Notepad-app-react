import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from 'react'



function Header({ search, setSearch }) {

  const [btnSearch, setBtnSearch] = useState(false)


  return (
    <header className='header'>
      <div className='title'><h1>My Notes</h1></div>
      {btnSearch && (
        <div className='container-search'>
          <input search={search} onChange={(e) => setSearch(e.target.value)} className='searchInp' type='search' placeholder='Search...' />


        </div>
      )}
      <div className='icons-header'>

        {!btnSearch && <FaSearch onClick={() => setBtnSearch(!btnSearch)} size={35} className='icon-search' />}
        <FaCirclePlus size={33} className='icon-add' />
      </div>
    </header>


  )
}

export default Header
