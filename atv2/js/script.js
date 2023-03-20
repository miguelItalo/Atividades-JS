const botao = document.querySelector('.btn')
botao.addEventListener('click', () => {
    let carro = document.querySelector('.nome-veiculo').value
    let valor = document.querySelector('.valor-veiculo').value
    let entrada = valor / 2
    let parcelas = entrada / 12
    
    let resposta = document.querySelector('.resposta')
    resposta.innerHTML = `<p>Veículo:${carro}</p><p>Entrada:R$ ${entrada}</p><p>12 x R$ ${parcelas.toFixed(2)}</p>`
})