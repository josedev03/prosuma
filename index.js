/**
 * Gets a message
 * @returns {string}
 */
function prosaludo(mensaje, destinatario = ''){
    let mensajeInterno = ``;
    mensajeInterno += destinatario ? `Apreciad@ ${destinatario} usted ha recibido el siguiente mensaje ` : ''
    mensajeInterno += `${mensaje}`
    console.log(mensajeInterno)
}

module.exports = {
    prosaludo
}