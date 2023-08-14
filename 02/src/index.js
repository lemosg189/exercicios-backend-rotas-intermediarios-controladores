const express = require('express')

const app = express()
let contador = 0
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

app.get('/', (req, res) => {
    let jogador = jogadores[contador]
    contador++
    if (contador >= jogadores.length) {
        contador = 0
    }

    res.send(`É a vez de ${jogador} jogar!`)
})

app.get('/remover', (req, res) => {
    const { indice } = req.query
    jogadores.splice(indice, 1)

    if (indice < jogadores.length) {
        res.send(jogadores)

    } else {
        res.send('Não existe jogador no índice informado para ser removido.')
    }
})

app.get('/adicionar', (req, res) => {
    const { nome, indice } = req.query

    if (!indice) {
        jogadores.push(nome)
        return res.send(jogadores)

    } else if (indice >= jogadores.length) {
        return res.send(`O índice informado ${indice} não existe no array. Novo jogador não foi adicionado.`)

    } else if (indice) {
        jogadores.splice(indice, 0, nome)
        return res.send(jogadores)
    }

})





app.listen(8000)
