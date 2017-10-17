import React from "react"
import HomePage from "./pages/HomePage"
import UsersListPage from "./pages/UsersListPage"
import AdminsListPage from "./pages/AdminsListPage"
import NotFoundPage from "./pages/NotFoundPage"
import App from "./App"

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/users" component={UsersList} />
//     </div>
//   )
// }

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users"
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
