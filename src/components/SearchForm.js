import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  let { state, handelSearch } = useGlobalContext();
  return <form className='search-form'>
    <h2>Search Hacker News</h2>
    <input className='form-input' value={state.searchQuery} onChange={handelSearch} />
  </form>
}

export default SearchForm
