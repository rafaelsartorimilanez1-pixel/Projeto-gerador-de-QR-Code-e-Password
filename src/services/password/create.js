import chalk from "chalk";
import handler from "./handle.js";

// Função responsável por gerar e exibir a senha
async function createPassword(){

    // Exibe um título no terminal com cor verde
    console.log(chalk.green("password"))

    // Chama a função handler que gera a senha
    const password = await handler();

    // Exibe a senha gerada no terminal
    console.log(password);
}

// Exporta a função para ser usada em outro arquivo
export default createPassword;