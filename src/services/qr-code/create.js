import prompt from "prompt"

// Importa o schema com as perguntas para gerar o QR Code
import promptSchemaQrCode from "../../prompt-schema/prompt-schema-qrcode.js"

// Importa a função handler que processa o resultado e gera o QR Code
import handler from "./handle.js";

async function createQRCode(){

    // Executa o prompt com base no schema definido
    // Quando o usuário responder, chama o handler (callback)
    prompt.get(promptSchemaQrCode, handler);

    // Inicia o prompt no terminal
    prompt.start();
}

// Exporta a função para ser usada em outro arquivo
export default createQRCode