document.addEventListener('DOMContentLoaded', function() {
    const consultasList = document.getElementById('consultasList');
    const loading = document.getElementById('loading');

    let consultas = localStorage.getItem('consultas');
    consultas = consultas ? JSON.parse(consultas) : [];

    loading.style.display = 'none';

    if (consultas.length === 0) {
        consultasList.innerHTML += '<p>Você não tem consultas agendadas.</p>';
    } else {
        consultas.forEach(consulta => {
            const consultaItem = document.createElement('div');
            consultaItem.className = 'consulta-item';
            consultaItem.innerHTML = `
                <p><strong>Nome:</strong> ${consulta.nome}</p>
                <p><strong>Email:</strong> ${consulta.email}</p>
                <p><strong>Telefone:</strong> ${consulta.telefone}</p>
                <p><strong>Especialidade:</strong> ${consulta.especialidade}</p>
                <p><strong>Data:</strong> ${consulta.data}</p>
                <p><strong>Hora:</strong> ${consulta.hora}</p>
                <p><strong>Mensagem:</strong> ${consulta.mensagem}</p>
            `;
            consultasList.appendChild(consultaItem);
        });
    }
});