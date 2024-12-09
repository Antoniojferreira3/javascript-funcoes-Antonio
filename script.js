// Seleção dos elementos HTML
const inserirBtn = document.getElementById('inserirBtn');
const formCadastro = document.getElementById('formCadastro');
const tabelaMedicos = document.getElementById('tabelaMedicos').getElementsByTagName('tbody')[0];

// Array para armazenar os dados dos médicos
let medicos = [];

// Função para criar o cabeçalho da tabela
function criarCabecalho() {
    const cabecalho = document.querySelector('#tabelaMedicos thead tr');
    const campos = ['Nome', 'Especialidade', 'CRM', 'Ações'];

    campos.forEach(campo => {
        const th = document.createElement('th');
        th.textContent = campo;
        cabecalho.appendChild(th);
    });
}

// Função para atualizar a tabela com os dados
function atualizarTabela() {
    // Limpa o conteúdo da tabela
    tabelaMedicos.innerHTML = '';

    // Preenche a tabela com os dados
    medicos.forEach((medico, index) => {
        const tr = document.createElement('tr');

        // Preenche cada célula da linha
        Object.values(medico).forEach(valor => {
            const td = document.createElement('td');
            td.textContent = valor;
            tr.appendChild(td);
        });

        // Botão de excluir
        const tdAcoes = document.createElement('td');
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluirMedico(index);
        tdAcoes.appendChild(btnExcluir);
        tr.appendChild(tdAcoes);

        tabelaMedicos.appendChild(tr);
    });
}

// Função para adicionar um novo médico
function adicionarMedico() {
    // Obter os valores do formulário
    const nome = document.getElementById('nome').value;
    const especialidade = document.getElementById('especialidade').value;
    const crm = document.getElementById('crm').value;

    // Validar se todos os campos estão preenchidos
    if (!nome || !especialidade || !crm) {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

    // Criar um objeto com os dados do médico
    const medico = {
        nome,
        especialidade,
        crm
    };

    // Adicionar o médico ao array de médicos
    medicos.push(medico);

    // Limpar o formulário
    formCadastro.reset();

    // Atualizar a tabela
    atualizarTabela();
}

// Função para excluir um médico
function excluirMedico(index) {
    medicos.splice(index, 1);
    atualizarTabela();
}

// Evento para adicionar o médico quando o botão "Inserir" for clicado
inserirBtn.addEventListener('click', adicionarMedico);

// Criar o cabeçalho da tabela quando a página carregar
window.onload = criarCabecalho;
