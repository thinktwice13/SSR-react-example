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

const app = express()

app.use(express.static("public"))

app.get("*", (req, res) => {
  const store = createStore()

  // Load component data before rendering on client
  matchRoutes(Routes, req.path).map(
    ({ route }) => route.loadData && route.loadData()
  )

  res.send(renderer(req, store))
})

app.listen(3003, () => console.log("Server started."))
