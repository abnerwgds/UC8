const DataEvento = ("09/09/2021")
const hoje = new Date ()
function dateCompare(d1, d2){
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if(date1 > date2){
        console.log("Evento cadastrado para "+DataEvento)
    } 
     else{
        console.log("Data inválida")
    }
}
dateCompare(DataEvento, hoje)
const nomeEvento = ("Evento")
const qtdPessoas = 6;
var Participantes = ["Abner","Fernanda","Marcia"]
var Palestrantes =["Júlio","Alfredo"]
const idade=15
if (idade<18) {
    console.log ("Não é possível se cadastrar no evento sendo menor de idade")
}
else {
    console.log("Cadastro Realizado com sucesso!")
}
console.log("São Participantes:")
Participantes.forEach(element1 => {
    console.log(element1)
});
console.log("São Palestrantes: ")
Palestrantes.forEach(element2 => {
    console.log(element2)
});
const totalPessoas = Palestrantes.length+Participantes.length
if (totalPessoas >= qtdPessoas) {
    console.log("Evento alcançou a lotação máxima")
} else{
    console.log("É possível cadastrar mais pessoas no evento")
}
