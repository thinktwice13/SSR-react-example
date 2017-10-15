import React from "react"
import { renderToString } from "react-dom/server"
import Home from "../client/components/Home"

module.exports = app => {
  const content = renderToString(<Home />)
  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}
