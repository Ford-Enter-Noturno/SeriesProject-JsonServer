document.getElementById('btnCadastrar').addEventListener('click', async (e) => {
    e.preventDefault()

    const url = "http://localhost:8081/series"

    const dadosEnviados = {
        "id": null,
        "nomeSerie": document.getElementById('nomeSerie').value,
        "numTemporada": document.getElementById('numTemporada').value,
        "nomeEstudio": document.getElementById('nomeEstudio').value,
        "anoLancamento": document.getElementById('anoLancamento').value,
    }

    try {
         await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosEnviados)
        })

        const response = await fetch(url)

        if (response.ok) {
            alert("Série cadastrada com sucesso")
        } else{
            alert("Erro ao cadastrar série. Verifique os dados e tente novamente")
        }

    } catch (error) {
        console.log(`O consumo via Post deu ruim, ${error}`);
    }
})