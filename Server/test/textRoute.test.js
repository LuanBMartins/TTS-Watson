const axios = require('axios').default
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const assert = require('assert')


// Função de requisições
const request = function (method, url, data) {
    return axios({ method, url, data, validateStatus: false })
}

// Gerador de textos aleatórios
const lorem = new LoremIpsum({
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

// Comentário base para ser utilizado nos testes
const data = {text: lorem.generateWords(4)}

describe('camada de testes', function() {
    this.timeout(Infinity)
    it('Deve salvar o texto e retornar junto dele um audio', async () => {
        const response = await request('post', 'http://localhost:3000/api/audios', data)
        console.log(response.data);
        const message = response.data
        assert.strictEqual(message.message, data.text)
        assert.ok(message.song.data.length > 0) 
        assert.ok(response.status === 201) 
    })
    it('Deve retorna os comentários armazenados', async ()=> {
        const response = await request('get', 'http://localhost:3000/api/audios')
        const message = response.data
        assert.ok(message.length >= 1)
        assert.ok(response.status === 200)
    })
    // it('Deve remover o texto do banco', async () => {
    //     const response = await request('delete', 'http://localhost:3000/api/audios', data)
    //     assert.ok(response.status === 204)
    // })
})
