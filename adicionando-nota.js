const notas = [8.7, 6.5, 7.8, 9.2];

notas.pop();

const media = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log("pop: " + media);
