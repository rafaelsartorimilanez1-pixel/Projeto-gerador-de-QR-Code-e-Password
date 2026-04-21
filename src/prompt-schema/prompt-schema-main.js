import chalk from "chalk";
import prompt from "prompt";

// Schema principal do menu (escolha da ferramenta)
const promptSchemaMain = [
    {
        // Nome do campo retornado (choose.select)
        name: "select",

        // Mensagem exibida no terminal (com destaque em amarelo e negrito)
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QR CODE ou 2 - PASSWORD)"),

        // Validação: aceita apenas "1" ou "2"
        pattern: /^[1-2]$/,

        // Mensagem exibida caso o usuário digite algo inválido
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),

        // Campo obrigatório (não pode deixar vazio)
        required: true,
    }
]

// Exporta o schema para ser usado no prompt principal
export default promptSchemaMain;