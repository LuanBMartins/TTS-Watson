const express = require('express')
const Route = express.Router()
const textService = require('../service/textService')

// Rotas para armazenamento, remoção e leitura dos textos.
Route.get('/api/audios', async (req, res) => {
    const message = await textService.findAll()
    res.status(200).send(message)
})

Route.post('/api/audios', async (req, res) => {
    const text = req.body.text
    const message = await textService.create(text)
    res.status(201).send(message)
})

Route.delete('/api/audios', async (req, res) => {
    const text = req.body.text
    await textService.delete(text)
    res.status(204).end()
})

// Rota para retornar um Buffer do texto
Route.get('/api/audios/:id', async (req, res) => {
    const id = req.params.id
    const audio = await textService.findOne(id)
    res.send(audio)
})

module.exports = Route