import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import Routes from "../client/Routes"
import { Provider } from "react-redux"

module.exports = ({ path }, store) => {
  const content = renderToString(
    <Provider>
      <StaticRouter location={path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  )
  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
