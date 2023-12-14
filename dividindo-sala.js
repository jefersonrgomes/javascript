const alunos = ["Maria", "João", "Pedro", "Ana"];
console.log("Todos alunos: " + alunos);
const metadeDaSala = alunos.length / 2

let sala1 = alunos.slice(0, metadeDaSala);
let sala2 = alunos.slice(metadeDaSala , 4);

console.log("Sala 01: " + sala1);
console.log("Sala 02:" + sala1);
