import React from 'react'
import { useGlobalContext } from '../context'

const Buttons = () => {
  let { state, handelPage } = useGlobalContext();
  if (state.error !== '' || state.loading) {
    return ('')
  }
  return <div className='btn-container'>
    <button onClick={() => handelPage('prev')}>Prev</button>
    <p>{state.pageIndex} of 50</p>
    <button onClick={() => handelPage('next')}>Next</button>
  </div>
}

export default Buttons
