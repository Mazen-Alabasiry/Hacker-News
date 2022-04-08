import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  SET_Error
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return ({ ...state, loading: !state.loading })

    case SET_STORIES:
      return ({ ...state, data: action.payload })
    case REMOVE_STORY:
      let newStories = state.data.filter(story => story.objectID !== action.payload)
      return ({ ...state, data: newStories })
    case HANDLE_PAGE:
      if (action.payload === 'next') {
        return ({ ...state, pageIndex: state.pageIndex + 1 })
      } else {
        return ({ ...state, pageIndex: state.pageIndex === 1 ? 1 : state.pageIndex - 1 })
      }

    case HANDLE_SEARCH:
      return ({ ...state, searchQuery: action.payload })
    case SET_Error:
      return ({ ...state, error: action.payload })

    default: throw new Error();
  }
}
export default reducer
