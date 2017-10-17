import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchAdmins } from "../actions"

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>)
  }

  render() {
    return (
      <div>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => ({ admins })

export default {
  loadData: store => store.dispatch(fetchAdmins()),
  component: connect(mapStateToProps, { fetchAdmins })(AdminsList)
}
