import prompt from "prompt"
import promptSchemaQrCode from "../../prompt-schema/prompt-schema-qrcode.js"
import handler from "./handle.js";

async function createQRCode(){
    prompt.get(promptSchemaQrCode, handler);

    prompt.start();
}

export default createQRCode