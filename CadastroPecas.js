/* Peça Possuir mais de 100g
Capacidade Máxima das peças 10uni.
O nome da peça deve ser maior ter mais de 3 caracteres 
CADASTRO DE Pecas
Abner - abnerwgds@gmail.com */
const listaPecas = ["Biela","Eixo","Mola","Braço de Direção","Camisa do Pistão"]
const PesoPecas = [50,100,20,30,40]
const QtdMax=10
console.log (listaPecas)
const QtdPecas=listaPecas.length
if (QtdPecas<=QtdMax) {
    let PecasCad=QtdMax-QtdPecas
    console.log("Você pode cadastrar: "+PecasCad+" uni.")
} else {
    console.log("Não é possível cadastrar mais de "+QtdMax+" uni.")
    let PecasRet=QtdPecas-QtdMax
    console.log("Você precisa retirar: "+PecasRet+" uni.")
}
let NomePeca="Engrenagem"
/* if (NomePeca.length<3) {
    console.log("Nome inválido deve ter mais de 3 caracteres")
} else if (NomePeca.length==0) {
    console.log("Não é possível deixar o nome  vazio")
} else {
    console.log("Nome válido")
} */

    switch (NomePeca.length) {
        case 0:
            console.log("Não é possível deixar o nome  vazio")
            break;
        case 1:
        case 2:
        case 3: 
        console.log("Nome inválido deve ter mais de 3 caracteres")
        break;
        default:
            console.log("Nome adequado!")
            break;
    }