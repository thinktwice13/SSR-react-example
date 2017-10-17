import React from "react"

export default {
  component: ({ staticContext = {} }) => {
    staticContext.notFound = true
    return <h1>Oops</h1>
  }
}
