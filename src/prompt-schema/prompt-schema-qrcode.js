import chalk from "chalk";

// Schema do prompt para coletar dados do QR Code
const promptSchemaQrCode = [

    {
        // Nome do campo que será retornado no resultado (result.link)
        name: "link",

        // Mensagem exibida no terminal (em amarelo)
        description: chalk.yellow("Digite o link para gerar o QR Code")
    },

    {
        // Nome do campo que será retornado (result.type)
        name: "type",

        // Pergunta exibida ao usuário
        description: chalk.yellow("Escolha entre o tipo (1 - NORMAL) (2- TERMINAL)"),

        // Validação: aceita apenas números entre 1 e 2
        pattern: /^[1-2]+$/,

        // Mensagem exibida caso a validação falhe
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),

        // Define que esse campo é obrigatório
        required: true,
    }
];

// Exporta o schema para ser usado no prompt
export default promptSchemaQrCode