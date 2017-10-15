// const express = require("express")
// const React = require("react")
// const renderToString = require("react-dom/server").renderToString
// const Home = require("./client/components/Home").default

import express from "express"
import renderer from "./helpers/renderer"

const app = express()

app.use(express.static("public"))

app.get("*", (req, res) => {
  res.send(renderer(req))
})

app.listen(3003, () => console.log("Server started."))
