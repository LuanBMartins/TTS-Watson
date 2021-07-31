const express = require('express')
const Route = express.Router()
const textService = require('../service/textService')

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

module.exports = Route