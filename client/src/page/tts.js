import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./style.css"

const Tts = () => {
    const [comment, setComment] = useState([])
    const [text, setText] = useState('')
    const [num, setAtt] = useState(0)

    useEffect(() => {
        request('get', 'http://localhost:3000/api/audios')
            .then(response => setComment(response.data))
    }, [num])

    const request = (method, url, data) => {
        return axios({ method, url, data, validateStatus: false })
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const audioPlay = async (event) => {
        const [message] = comment.filter(item => item.id === Number(event.target.id))
        let audio = new Audio(`http://localhost:3000/api/audios/${message.id}`)
        audio.play()
    }



    const handleClickDelete = async (event) => {
        const [message] = comment.filter(item => item.id === Number(event.target.id))
        await request('delete',`http://localhost:3000/api/audios/${message.id}`)
        setAtt(oldNum => oldNum + 1)
    }

    const handleClick = async () => {
        if (text === '') return false
        const response = await request('post', 'http://localhost:3000/api/audios', {text: text})
        setComment(oldArray => [...oldArray, response.data])
        setText('')
    }

    return (
        <section>
            <h1>Text To Speech</h1>
            <div class="flex">
            <form action="">
                <label htmlFor='comentario'> <h2>Comentario</h2> </label><br></br>
                <textarea id="text" placeholder="Digite aqui" value={text} onChange={handleChange} /><br></br>
                <button type="button" onClick={handleClick}>Cadastrar</button>
            </form>

            <div class="songs">
                <h2>Comentários</h2>
               {comment.map(item => {
                   return <li key={item.id} class="comments">
                       <li>{item.message}</li>
                       <button class="delete"id={item.id} onClick={handleClickDelete}>Deletar</button>
                       <button id={item.id} onClick={audioPlay}>Ouvir Audio</button>
                   </li>
               })}
            </div>

            </div>
        </section>
    )
}

export default Tts