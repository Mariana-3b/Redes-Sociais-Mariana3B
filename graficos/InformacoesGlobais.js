const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
async function vizualizarInformaçoesGlobais() {
    const res = await fetch(url)
    const dados = await res.jason()
    const paragrafo = document.createElement('p')
    
    
}

vizualizarInformaçoesGlobais()