const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: 'string',
        required: true
    },
    tipoProduto: {
        type: 'string',
        required: true,
        enum: ['comida', 'bebida'],
        default: 'comida'
    },
    preco: {
        type: 'number' || 0,
        required: true
    },
    imagem: {
        type: 'string',
        default: 'https://www.clipartmax.com/png/middle/291-2911742_no-camera-allowed-tools-free-black-white-clipart-images-no-picture-taking.png'
    },
    descricao: {
        type: 'string',
    }
});

module.exports = mongoose.model('Produto', schema);