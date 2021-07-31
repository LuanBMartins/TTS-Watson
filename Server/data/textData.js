const Text = require('../infra/models/textModel')

exports.findAll = function() {
    return Text.findAll()
}

exports.create = function(text) {
    return Text.create(text, {raw: true})
}

exports.delete = function(text) {
    return Text.destroy({
        where: text
    })
}