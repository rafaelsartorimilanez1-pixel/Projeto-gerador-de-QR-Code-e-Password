import chalk from "chalk";

const promptSchemaQrCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR Code")
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo (1 - NORMAL) (2- TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
] ;

export default promptSchemaQrCode