export function salvarCadastro(dados) {
    const cadastrosSalvos = localStorage.getItem('cadastros');

    let cadastros = [];

    if (cadastrosSalvos) {
        cadastros = JSON.parse(cadastrosSalvos);
    }

    cadastros.push(dados);

    localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

export function recuperarCadastros() {
    const dados = localStorage.getItem('cadastros');

    if (dados) {
        return JSON.parse(dados);
    }

    return [];
}