//SELECIONANDO ELEMENTOS DOM
const tarefaInput = document.getElementById('tarefaInput');
const adicionarTarefa = document.getElementById('adicionarTarefa');
const lista = document.getElementById('lista');

//FUNÇÃO PARA ADICIONAR TAREFA NA LISTA

function novaTarefa() {
    const tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto !== "") {
        const tarefaItem = document.createElement("li");
        tarefaItem.textContent = tarefaTexto;

        lista.appendChild(tarefaItem);
        tarefaInput.value = "";

        //ADICIONAR UM BOTÃO DE CONCLUSÃO

        const botaoConc = document.createElement("button");
        botaoConc.textContent = "Concluir";
        tarefaItem.appendChild(botaoConc);

        //REMOÇÃO DE TAREFAS

        botaoConc.addEventListener("click", () => {
            tarefaItem.remove();
        });
    }
}

//ADICIONAR TAREFAS 

adicionarTarefa.addEventListener("click", novaTarefa);

//TECLA ENTER

tarefaInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        novaTarefa();
    }
});