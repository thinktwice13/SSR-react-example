import React from "react"
import { Link } from "react-router-dom"

export default () => {
  return (
    <div>
      <Link to="/">SSR React Example</Link>
      <Link to="/users">Users</Link>
    </div>
  )
}
