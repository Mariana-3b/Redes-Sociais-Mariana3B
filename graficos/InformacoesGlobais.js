const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    
    


    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

    
    paragrafo.innerHTML = `Sabia que no mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e aproximadamente <span>${dados.total_pessoas_conectadas}</span> pessoas passam em média <span>${dados.tempo_medio}</span> horas conectadas em alguma rede social?.`
    
   

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}


vizualizarInformacoesGlobais()