// const btnPlatos = document.querySelector("#btn-cargar");
// const divPlatos = document.querySelector(".cargar-platos");
// // const foto1 = document.querySelector("#foto1");


// let alergias = ["images/alergia1.png", "images/alergia2.png", "images/alergia3.png", "images/alergia4.png", "images/alergia5.png"];


// btnPlatos.addEventListener("click", () => {
//     divPlatos.style.height = "300vh";
//     divPlatos.style.width = "100%";


//     for (let i = 0; i < alergias.length; i++) {
        
//         let imgFoto = document.createElement("img");
//         imgFoto.style.width = "18%";
//         imgFoto.id = "imagen" + i;
//         imgFoto.src = alergias[i];
//     }

// });








///////////////////////////////////////alex programation////////////////////////////////////////////////

let hacerclic=document.querySelector('#clicplatos');
let prua=document.getElementsByClassName('imagen');

var arrayimg=new Array;

hacerclic.addEventListener('click', () => {
    for(let i=0; i < prua.length; i++){
        prua[i].src=arrayimg[i]
    }
});
  
    for(let i= 0; i < arrayimg.length; i++){
    }

    for (let i = 1; i<=16 ; i++){
        arrayimg.push("/images/menus/plato"+" " +"(" + i + ").png") 
    }
   








