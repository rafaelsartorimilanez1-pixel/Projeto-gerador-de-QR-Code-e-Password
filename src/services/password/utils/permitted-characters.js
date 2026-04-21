async function permittedCharacters(){

    // Array que vai armazenar todos os caracteres permitidos
    let permitted = [];
    
    // Verifica se deve incluir letras maiúsculas
    if(process.env.UPPERCASE_LETTERS === "true"){
        // Adiciona todas as letras maiúsculas no array
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    // Verifica se deve incluir letras minúsculas
    if(process.env.LOWERCASE_LETTERS === "true"){
        // Adiciona todas as letras minúsculas no array
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    // Verifica se deve incluir números
    if(process.env.NUMBERS === "true"){
        // Adiciona os números de 0 a 9 no array
        permitted.push(..."0123456789")
    }

    // Verifica se deve incluir caracteres especiais
    if(process.env.SPECIAL_CHARACTERS === "true"){
        // Adiciona alguns símbolos no array
        permitted.push(..."!@#$%^&()-_")
    }

    // Retorna o array final com todos os caracteres permitidos
    return permitted
}

// Exporta a função para ser usada em outro arquivo
export default permittedCharacters