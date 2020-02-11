const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    {
        id: 1,
        name: "Erik Bouman",
        number: "2019053017",
    },
    {
        id: 2,
        name: "Alia Gurtenberg",
        number: "2019866576",
    },
    {
        id: 3,
        name: "Venik Riag",
        number: "1274866576",
    },
    {
        id: 4,
        name: "Patrice Riag",
        number: "1279986576",
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info of <span>${persons.length + 1}</span> people</p> 
    <p>${new Date()}</p>`)
})

app.get('/persons', (req, res) => {
    res.json(persons)
})

app.get('/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = persons.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)

    response.status(204).end()
})

const generateId = (min) => {
    const maxId = Math.floor(Math.random() * (500 - min + 1))
    return maxId + 1
}

app.post('/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        name: body.name,
        number: body.number,
        id: generateId(persons.length + 1),
    }

    persons = persons.concat(note)

    response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})