const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/user', (req, res) => {
    //console.log(JSON.stringify(req.body))
    let id = 7
    res.send(JSON.stringify(req.body) + ' id:' + id)
})

app.listen(3000, () => {
    console.log('Online...')
})