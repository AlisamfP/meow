import _ from 'lodash'
import { connect } from 'react-redux'
import { replaceState, pushState } from 'redux-router'
import React, { Component } from 'react'
import { Layout, Fixed, Flex } from 'react-layout-pane'
//
// import NavBar from '../components/nav-bar'
// import Spinner from '../components/spinner'
// import TopBar from '../components/top-bar'

class Cats extends Component {
  componentDidMount() {
    //fetch users
  }

  componentWillReceiveProps() {

  }

  handleLogout = () => {
    console.log("logging out...")
  }

  render() {
    const {children} = this.props
    //
    // if (!orgs.all) return <Spinner size="large" />
    // if (!orgs.selectedOrg) return <Spinner size="large" />

    return <Layout type="column">
      <Flex>
        <Layout type="column">
        <Flex>Hello</Flex>
        </Layout>
      </Flex>
    </Layout>
  }
}

function mapStateToProps({users}) {
  return {users}
}

export default connect(mapStateToProps)(Cats)
