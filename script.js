const projetos = [
    {
        nome: "Sistema de Fiscalização",
        descricao: "Sistema web para cadastro e consulta de fiscalizações com integração ao Google Sheets."
    },
    {
        nome: "Dashboard de Irregularidades",
        descricao: "Painel com filtros, gráficos e estatísticas para acompanhamento de dados."
    },
    {
        nome: "Automação de Documentos",
        descricao: "Automação de envio de e-mails e organização de arquivos no Google Drive."
    }
];

const listaProjetos = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("projeto-card");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
    `;

    listaProjetos.appendChild(card);
});
