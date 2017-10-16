import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../actions"

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }

  render() {
    return (
      <div>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

export const loadData = () => console.log("Loading data")

export default connect(mapStateToProps, { fetchUsers })(UsersList)
