import qr from "qrcode-terminal";
import chalk from "chalk";

// Função responsável por gerar o QR Code
async function handler (err, result){

    // Verifica se houve erro ao obter os dados
    if(err){
        console.log("error on aplication");
        return;
    }

    // Define se o QR Code será pequeno ou não
    // (provavelmente vindo de uma escolha do usuário)
    const isSmall = result.type === 2;

    // Gera o QR Code no terminal
    qr.generate(result.link, { small: isSmall }, (qrcode) => {

        // Mensagem de sucesso em verde
        console.log(chalk.green("QR Code gerado com sucesso: \n"))

        // Exibe o QR Code no terminal
        console.log(qrcode);
    });
};

// Exporta a função para ser usada em outro arquivo
export default handler;