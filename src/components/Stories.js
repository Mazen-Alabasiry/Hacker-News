import React from 'react'
import Story from './Story'
import { useGlobalContext } from '../context'

const Stories = () => {
  let { state } = useGlobalContext();

  if (state.loading) {
    return <div className='loading'>
      <div></div>
    </div>
  }
  if (state.error !== '') {
    return <h2 className='error'><span>Oops,Failed To Get The Data.</span>  Please Check Your Connection, then Restart The Page</h2>
  }
  return <section className='stories'>
    {state.data && state.data.map(story => <Story key={story.objectID} data={story} />)}
  </section>
}

export default Stories
