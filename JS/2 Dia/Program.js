console.log("Bem vindo!");
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!!`;
alert(msg);


const estudo = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (estudo ==1){
alert('Muito bom! Continue estudando e você terá muito sucesso.');
} 
if(estudo ==2){
alert('Ahh que pena... Já tentou aprender outras linguagens?');
}


/*
Tanto o alert() quanto o prompt() são usados para criar caixas de diálogo e interagir com o usuário, mas eles são diferentes entre si.
O alert() é usado para mostrar uma mensagem simples ao usuário.
Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular.*/