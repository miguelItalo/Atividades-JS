const botao = document.querySelector('.btn')
botao.addEventListener('click', () => {
    let titulo = document.querySelector('.titulo').value
    let minutos = 0
    minutos = document.querySelector('.duracao').value
    let horas = 0

    while(true){
        if(minutos >= 60){
            horas++
            minutos = minutos - 60
        }
        else{
            break
        }
    }

    let resposta = document.querySelector('.resposta')
    resposta.innerHTML = `<p>Titulo:${titulo}</p><p>Duração:${horas} hora(s) e ${minutos} minutos(s)`
})
