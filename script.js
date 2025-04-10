function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if (task) {
        let li = document.createElement("li");
        li.textContent = task;

        // Adicionar evento de clique para marcar como conclu�do
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Criar bot�o de exclus�o
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = function() {
            li.remove();
        };

        // Adicionar bot�o de exclus�o ao item da lista
        li.appendChild(deleteButton);

        // Adicionar item da lista � lista de tarefas
        document.getElementById("taskList").appendChild(li);

        // Limpar o campo de entrada
        input.value = "";
    }
}
