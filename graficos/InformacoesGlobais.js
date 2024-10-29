const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
async function vizualizarInformaçoesGlobais() {
    const res = await fetch(url)
    const dados = await res.jason()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Sabia que no mundo tem ${dados.total_pessoas_mundo} de pessoas e aproximadamente ${dados.total_pessoas_conectadas} de pessoas passam em média ${dados.tempo_medio} horas conectadas em alguma rede social?`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformaçoesGlobais()