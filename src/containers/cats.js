import _ from 'lodash'
import { connect } from 'react-redux'
import { replaceState, pushState } from 'redux-router'
import React, { Component } from 'react'

import { fetchCatList } from '../actions/user-actions'
import MeowCard from '../components/meow-cards'

class Cats extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchCatList())
  }

  render() {
    const {children, users} = this.props

    if(!users.catList) return <h1>LOADING</h1>;

    return <div>
      <div>
        <h1>MEOW</h1>
        <MeowCard catList={users.catList} />
      </div>
    </div>
  }
}

function mapStateToProps({users}) {
  return {users}
}

export default connect(mapStateToProps)(Cats)
