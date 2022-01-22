document.querySelector('#confirmar_presenca').addEventListener('click',function(){
 let nome = document.querySelector('#nome').value;
 let fone = document.querySelector('#fone').value;
 let email = document.querySelector('#email').value;
 let convidado = document.querySelector('#convidado').value;
 let mensagem = document.querySelector('#mensagem').value;
 
let url = ("https://api.whatsapp.com/send?phone=5543999799500&text= Estou confirmando minha presença no Casamento. Dia 19/03/2022 às 17:00. %0A Meu nome: %0A " + 
			nome + " %0A Vou levar " + convidado + " pessoa(s) comigo. %0A Meu telefone pra contato é: "+ fone +" %0A Meu e-mail é: "+ email +
			" %0A Quero deixar um recado especial:  %0A" + mensagem );
alert(url);
window.open(url);

});