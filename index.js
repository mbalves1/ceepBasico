import BotaoConclui from './componentes/concluiTarefas.js';
import BotaoDeleta from './componentes/deletaTarefa.js';


const criarTarefa = (event) => {
    event.preventDefault();
    
    const item = document.querySelector('[data-input="input"]')
    const valorItem = item.value
    
    const lista = document.querySelector('#resultado')

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const linha = `<p class="content">${valorItem} </p>`
    
    tarefa.innerHTML = linha

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)

    item.value = ''
    
}

const button = document.querySelector('.form-button')

button.addEventListener('click', criarTarefa)









