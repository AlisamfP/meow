import * as types from '../constants/action-types'

export function fetchCatList() {
  return {
      type: types.FETCH_CAT_LIST,
      catList: _fetchCatList()
  }
}

function _fetchCatList() {
  return [{
    name: 'Taquito'
  },
  {
    name: 'Zooey'
  }]
}
