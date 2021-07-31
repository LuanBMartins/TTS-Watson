const textData = require('../data/textData')
const textToSpeech = require('./TTSconfig')

exports.findAll = async function() {
    return textData.findAll()
}

exports.create = async function(text) {
    const audio = (await textToSpeech(text)).toJSON()
    const create = textData.create({message: text, song: audio})
    return create
}

exports.delete = function(text) {
    return textData.delete({message: text})
}