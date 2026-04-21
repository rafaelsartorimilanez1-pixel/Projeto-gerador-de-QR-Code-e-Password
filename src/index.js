import prompt from 'prompt'

// Importa o schema principal (estrutura das perguntas do menu)
import promptSchemaMain from './prompt-schema/prompt-schema-main.js';

// Importa a função responsável por criar QR Code
import schemaCreateQrCode from './services/qr-code/create.js';

// Importa a função responsável por criar senha
import createPassword from './services/password/create.js';

async function main(){

    // Inicia o prompt no terminal
    prompt.start();

    // Executa o prompt com base no schema definido
    prompt.get(promptSchemaMain, async (err, choose) => {

        // Tratamento de erro caso o prompt falhe
        if(err) return console.log(err)

        // Se o usuário escolher a opção "1"
        if(choose.select === "1"){ 
        
            // Chama a função que cria o QR Code
            await schemaCreateQrCode();
        };

        // Se o usuário escolher a opção "2"
        if(choose.select === "2"){

            // Chama a função que gera a senha
            await createPassword()
        };
    });

}

// Executa a função principal
main();