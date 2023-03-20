const botao = document.querySelector('.btn')
botao.addEventListener('click', () => {
    let medicamento = document.querySelector('.medicamento').value
    let preco = document.querySelector('.preco').value
    preco = parseInt(preco * 2)

    let resposta = document.querySelector('.resposta')
    resposta.innerHTML = `<p>Promoção de ${medicamento}</p><br><p>Leve 2 por apenas R$${preco.toFixed(2)}</p>` 
})