import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Tts = () => {
    const [comment, setComment] = useState([])
    const [text, setText] = useState('')

    const request = (method, url, data) => {
        return axios({ method, url, data, validateStatus: false })
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = async () => {
        if (text === '') return false
        const response = await request('post', 'http://localhost:3000/api/audios', {text: text})
        console.log('log',response);
        setComment(oldArray => [...oldArray, response.data])
        setText('')
    }

    return (
        <div>
            <form action="">
                <label htmlFor='comentario'> Comentario</label><br></br>
                <textarea id="text" placeholder="Digite aqui" value={text} onChange={handleChange} /><br></br>
                <button type="button" onClick={handleClick}>Gerar audio</button>
            </form>
        </div>
    )
}

export default Tts