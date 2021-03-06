import _ from 'lodash'
import { connect } from 'react-redux'
import { replaceState, pushState } from 'redux-router'
import React, { Component } from 'react'

import { fetchCatList } from '../actions/user-actions'
import MeowCard from '../components/meow-cards'

import '../styles/base.css'

class Cats extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(fetchCatList())
  }

  handleMeow(cat) {
    console.log(`${cat.name} SAYS MEOW`);
  }

  render() {
    const {children, users} = this.props

    if(!users.catList) return <h1>LOADING</h1>;

    return <div className="container">
      <h1>MEOW</h1>
      <div>
        <MeowCard catList={users.catList} handleMeow={this.handleMeow} />
      </div>
    </div>
  }
}

function mapStateToProps({users}) {
  return {users}
}

export default connect(mapStateToProps)(Cats)
