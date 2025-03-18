//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {

    const novoNome = document.getElementById('amigo').value

    if (novoNome) {
        amigos.push(novoNome)

        console.log('amigos::: ', amigos)

        document.getElementById('amigo').value = ''

        exibirlistaAmigos()
    } else {
        alert('Digite um nome válido')

    }
}
function exibirlistaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos')

    listaAmigos.innerHTML = ''

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li')
        li.textContent = amigos[i]
        listaAmigos.appendChild(li)
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Adicione pelo menos um amigo para sortear')

        return
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]

    const resultado = document.getElementById('resultado')

    resultado.innerHTML = ''

    const li = document.createElement('li')
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`
    resultado.appendChild(li)
}