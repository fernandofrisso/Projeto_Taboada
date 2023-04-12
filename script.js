

//evento

document.querySelector('.button').addEventListener('click', gerarTabuada);

//function

function gerarTabuada(){

   let num = document.getElementById('txtn');
   let tab = document.getElementById('selTab');


   if (num.value.length == ''){

       window.alert("Por favor, digite um número")
      
   } else{

      let n = Number(num.value);
      let c = 0;

      tab.innerHTML = ''; //serve pra limpar as opções a cada novo número colocado

      while(c <=10){

         let item = document.createElement('option');

         item.text = `${n} x ${c} = ${n*c}`; // esse text é pra colocar o texto, mas poderia ter usado o innerHTML

         tab.appendChild(item);

         c++
      }

      

   }

}