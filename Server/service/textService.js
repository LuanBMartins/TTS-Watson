const textData = require('../data/textData')
const textToSpeech = require('./TTSconfig')

exports.findAll = function() {
    return textData.findAll()
}

exports.create = async function(text) {
    //Buffer do áudio é convertido em Json e armazenando no banco.
    const audio = (await textToSpeech(text)).toJSON()
    const {dataValues} = await textData.create({message: text, song: audio})
    return dataValues
}

exports.delete = function(id) {
    return textData.delete({id: id})
}

exports.findOne = async function(id) {
    //Converte o json armazenado no bd em Buffer
    const {dataValues} = await textData.findOne(id)
    const json = dataValues.song
    return Buffer.from(json)
}