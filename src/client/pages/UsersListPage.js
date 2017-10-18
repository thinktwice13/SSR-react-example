import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../actions"
import { Helmet } from "react-helmet"

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} users loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.head()}
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

export default {
  loadData: store => store.dispatch(fetchUsers()),
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}
