export default function calculaIMC(peso, altura){
    altura/=100
    return (peso/(Math.pow(altura, 2)))
}