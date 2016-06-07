import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = {
  error: false,
  fetching: false,
  catList: null
}

export default function(state = initialState, action) {

  switch(action.type) {

    case types.FETCH_CAT_LIST:
      return _.assign({}, state, {
        catList: action.catList
      })

    default:
      return state;
  }

}
