"use strict"
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongojs from 'mongojs'

//config database
const databaseUrl = 'Session1'
const collections = ['form']
const db = mongojs(databaseUrl, collections)

//use express
const app = express()
const port = process.env.PORT || 5000

//enable CORS
app.use(cors())

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
	res.send('This is nodejs yeah')
})

app.post('/', (req, res) => {
	db.form.insert(req.body)
  res.send('Send complete!')
})

app.get('/all', (req, res) => {
  db.form.find((err, docs) => {
    res.send({data: docs})
  })
})

//listen to
app.listen(port, () => {
	console.log('Start node.js at port ', port)
})
