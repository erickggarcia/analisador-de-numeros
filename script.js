let res = document.getElementById('res')
let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let valores = []
let btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', adicionar)

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100 ) {
    return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(Number(l.indexOf(n)) == -1) {
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isNumero(numero.value) && inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('Número inválido ou já adicionado!')
    }
    numero.value = ''
    numero.focus()
    res.innerHTML = ''
}

let btnFinalizar = document.getElementById('btnFinalizar')
btnFinalizar.addEventListener('click', finalizar)

function finalizar() {
    let soma = 0
    let media = 0
    let menor = valores[0]
    let maior = valores[0]

    for(let indice = 0; indice < valores.length; indice++) {
        soma += valores[indice]
        
        if(valores[indice] < menor){
            menor = valores[indice]
        }
        if(valores[indice] > maior){
            maior = valores[indice]
        }
    }
    total = valores.length
    media += soma / total

    res.innerHTML = `<p>total de ${total} valores adicionados</p>`
    res.innerHTML += `<p>O menor número digitado foi ${menor}</p>`
    res.innerHTML += `<p>O maior número digitado foi ${maior}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
}