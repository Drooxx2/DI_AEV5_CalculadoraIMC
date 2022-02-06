/**
 * Calcula el IMC del usuario
 * @param {Peso introducido por el usuario} peso 
 * @param {Altura introducida por el usuario} altura 
 * @returns 
 */
export default function calculaIMC(peso, altura){
    altura/=100
    return (peso/(Math.pow(altura, 2)))
}