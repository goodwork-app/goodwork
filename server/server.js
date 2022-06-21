const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(path.resolve(__dirname, '../dist')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log("Hi guys!")
})