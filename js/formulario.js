import { salvarCadastro } from './storage.js';

document.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = document.querySelector('#nome');
    const email = document.querySelector('#email');
    const mensagem = document.querySelector('#mensagem');

    if (nome.value.trim() === '') {
        mensagem.textContent = 'Por favor, informe seu nome.';
        return;
    }

    if (email.value.trim() === '') {
        mensagem.textContent = 'Por favor, informe seu e-mail.';
        return;
    }

    const dadosCadastro = {
        nome: nome.value.trim(),
        email: email.value.trim()
    };

    salvarCadastro(dadosCadastro);
    alert('Cadastro realizado com sucesso!');
});