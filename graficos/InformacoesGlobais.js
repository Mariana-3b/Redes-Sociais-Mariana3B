const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    // código omitido
const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
const horas = parseInt(dados.tempo_medio)
const minutos = Math.round((dados.tempo_medio - horas) * 100)

const paragrafo = document.createElement('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Sabia que no mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e aproximadamente <span>${pessoasConectadas} bilhões</span> passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas em alguma rede social?`

// código omitido

   

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}


vizualizarInformacoesGlobais()