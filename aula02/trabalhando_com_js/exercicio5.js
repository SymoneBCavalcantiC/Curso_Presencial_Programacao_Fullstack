const notasAlunos = [];
notasAlunos.push(9.7);
notasAlunos.push(9.9);
notasAlunos.push(5.0);

var media = (notasAlunos[0] + notasAlunos[1] + notasAlunos[2]) / notasAlunos.length;

console.log(`A primeira nota do aluno é: " ${notasAlunos[0]}`);
console.log(`A segunda nota do aluno é: " ${notasAlunos[1]}`);
console.log(`A terceira nota do aluno é: ${notasAlunos[2]}`);
console.log(`A MÉDIA do aluno é: ${media}`);

let mediaFinal = media;
if (media >= 7) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!")
}
