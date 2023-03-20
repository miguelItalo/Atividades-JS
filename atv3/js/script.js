const botao = document.querySelector('.btn')
botao.addEventListener('click', () => {
    let valorQuilo = document.querySelector('.valor-quilo').value
    let consumo = document.querySelector('.consumo').value
    let preco = (valorQuilo / 1000) * consumo
    console.log('a')

    let resposta = document.querySelector('.resposta')
    resposta.innerHTML = `<p>Valor a pagar: R$${preco.toFixed(2)}</p>`
})