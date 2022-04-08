import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  SET_Error
} from './actions'
import reducer from './reducer'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

  const initialState = {
    searchQuery: '',
    data: [],
    pageIndex: 1,
    loading: false,
    error: ''
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  //searching
  const handelSearch = (e) => {
    e.preventDefault();
    dispatch({ type: HANDLE_SEARCH, payload: e.target.value })
  }
  //handel Page
  const handelPage = (condition) => {
    dispatch({ type: HANDLE_PAGE, payload: condition })

  }

  // Fetch Data
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    fetchData()
  }, [state.searchQuery, state.pageIndex])

  const fetchData = async () => {
    try {
      dispatch({ type: SET_LOADING })
      let response = await fetch(API_ENDPOINT + `query=${state.searchQuery}&page=${state.pageIndex}`)
      let data = await response.json();
      dispatch({ type: SET_STORIES, payload: data.hits })
      dispatch({ type: SET_LOADING })
    } catch (error) {
      dispatch({ type: SET_Error, payload: error.message })
    }
  }
  // Remove Story
  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id })
  }
  return <AppContext.Provider value={{ state, handelSearch, handelPage, removeStory }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
