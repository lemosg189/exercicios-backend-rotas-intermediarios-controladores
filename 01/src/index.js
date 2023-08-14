const express = require('express')

const app = express()

app.get('/somar', (req, res) => {
    const { num1, num2 } = req.query
    const numero1 = +num1
    const numero2 = +num2

    let resultado = numero1 + numero2;

    res.json(resultado)

})

app.get('/subtrair', (req, res) => {
    const { num1, num2 } = req.query
    const numero1 = +num1
    const numero2 = +num2

    let resultado = numero1 - numero2

    res.json(resultado)
})

app.get('/multiplicar', (req, res) => {
    const { num1, num2 } = req.query
    const numero1 = +num1
    const numero2 = +num2

    let resultado = numero1 * numero2

    res.send({ resultado })
})

app.get('/dividir', (req, res) => {
    const { num1, num2 } = req.query
    const numero1 = +num1
    const numero2 = +num2

    let resultado = numero1 / numero2

    res.send({ resultado })
})



app.listen(3000)