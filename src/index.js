// const express = require("express")
// const React = require("react")
// const renderToString = require("react-dom/server").renderToString
// const Home = require("./client/components/Home").default

import "babel-polyfill"
import express from "express"
import renderer from "./helpers/renderer"
import createStore from "./helpers/createStore"
import { matchRoutes } from "react-router-config"
import Routes from "./client/Routes"
import proxy from "express-http-proxy"

const app = express()

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000"
      return opts
    }
  })
)
app.use(express.static("public"))

app.get("*", (req, res) => {
  const store = createStore(req)

  // Load component data before rendering on client
  const promises = matchRoutes(Routes, req.path).map(
    ({ route }) => route.loadData && route.loadData(store)
  )

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)
    if (context.notFound) {
      res.status(404)
    }
    res.send(content)
  })
})

app.listen(3000, () => console.log("Server started."))
