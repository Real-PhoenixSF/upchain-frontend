const fs = require("fs")
const express = require('express')
const hostname = "example.com"

const app = express()
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + "/web"))

app.listen(port, () => {
	console.log("Upchain frontend listening on port", port)
})
