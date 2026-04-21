import chalk from "chalk";
import prompt from "prompt";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QR CODE ou 2 - PASSWORD)"),
        pattern: /^[1-2]$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
]

export default promptSchemaMain;