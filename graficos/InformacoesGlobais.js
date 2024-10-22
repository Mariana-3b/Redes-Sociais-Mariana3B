const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
async function vizualizarInformaçoesGlobais() {
    const res = await fetch(url)
    const dados = await res.jason()
    console. log (dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    
}

vizualizarInformaçoesGlobais()