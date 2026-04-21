import permittedCharacters from "./utils/permitted-characters.js";

// Função responsável por gerar a senha
async function handler(){

    // Array que vai armazenar os caracteres permitidos
    let characters = [];

    // String final da senha gerada
    let password = "";

    // Obtém o tamanho da senha a partir das variáveis de ambiente
    // (convertendo de string para número)
    const passwordLength = Number(process.env.PASSWORD_LENGTH);

    // Busca os caracteres permitidos (letras, números, símbolos, etc.)
    characters = await permittedCharacters();

    // Loop para montar a senha com base no tamanho definido
    for(let i = 0; i < passwordLength; i++ ){

        // Gera um índice aleatório baseado no tamanho do array de caracteres
        const index = Math.floor(Math.random() * characters.length);

        // Adiciona um caractere aleatório à senha
        password += characters[index];
    }

    // Retorna a senha final gerada
    return password
}

// Exporta a função para ser usada em outro arquivo
export default handler