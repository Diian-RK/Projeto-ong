import './formulario.js';

const app = document.querySelector('#app');

const rotas = {
 '/': `
    <section>
        <h2>Sobre a ONG</h2>

        <img src="../img/ong.jpg" alt="Voluntários da ONG participando de uma ação de inclusão social">

        <p>
            Nossa ONG atua na promoção da inclusão social
            e na melhoria da qualidade de vida da comunidade.
        </p>
    </section>
`,

    '/projetos': `
        <section>
            <h2>Projetos da ONG</h2>
            <p>
                Conheça nossos projetos sociais e ações
                voltadas para a comunidade.
            </p>
        </section>
    `,

'/cadastro': `
    <section>
        <h2>Cadastro</h2>

        <form id="form-cadastro">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Cadastrar</button>
        </form>

        <p id="mensagem" aria-live="polite"></p>
    </section>
`,
};
function navegar(caminho) {
    const conteudo = rotas[caminho];

    if (conteudo) {
        app.innerHTML = conteudo;
    }
}

const caminho = window.location.pathname;

if (caminho.includes('cadastro')) {
    navegar('/cadastro');
} else if (caminho.includes('projetos')) {
    navegar('/projetos');
} else {
    navegar('/');
}


