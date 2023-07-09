import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="searchbox">Search</label>
        <input
           id='search'
           type="text"
           role='search'
           placeholder='Search Items'
           value={search}
           onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default Searchitem