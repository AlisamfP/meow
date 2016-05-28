import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = {
  error: false,
  fetching: false,
  users: null
}

export default function(state = initialState, action) {

  switch(action.type) {

    // case types.ACTION:
    //   return _.assign({}, state, { })

    default:
      return state;
  }

}
