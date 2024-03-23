//Realizar o consumo de nossa API
//GET

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const url = "http://localhost:8081/series"

    async function getSeries() {
        try {
            const response = await fetch(url)
            console.log(response);

            const dados = await response.json()
            console.log(dados);

            dados.forEach(series => {
            
                const tr = document.createElement('tr');
                const div = document.createElement('div');
                const listaSeries = document.getElementById('listaSeries');
    
                //realizar a criação das celulas de nossa tabela
                const nomeSerie = document.createElement('td')
                nomeSerie.textContent = series.nomeSerie
    
                const numTemporada = document.createElement('td')
                numTemporada.textContent = series.numTemporada
    
                const anoLancamento = document.createElement('td')
                anoLancamento.textContent = series.anoLancamento
    
                const nomeEstudio = document.createElement('td')
                nomeEstudio.textContent = series.nomeEstudio
    
                tr.appendChild(nomeSerie)
                tr.appendChild(numTemporada)
                tr.appendChild(anoLancamento)
                tr.appendChild(nomeEstudio)
    
                listaSeries.appendChild(tr)
            });

        } catch (error) {
            console.error(error);
            console.log(error);
        }


       
    }

    getSeries()
})

