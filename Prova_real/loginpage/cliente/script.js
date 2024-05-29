document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        especialidade: document.getElementById('especialidade').value,
        data: document.getElementById('data').value,
        hora: document.getElementById('hora').value,
        mensagem: document.getElementById('mensagem').value
    };

    let consultas = localStorage.getItem('consultas');
    consultas = consultas ? JSON.parse(consultas) : [];
    consultas.push(formData);
    localStorage.setItem('consultas', JSON.stringify(consultas));

    document.getElementById('message').innerText = 'Agendamento realizado com sucesso!';
});