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

const hacerclic=document.querySelectorAll('.plato-filtro');
const imagenvacia=document.querySelectorAll('.imagen');
const valordeetiquetap=document.querySelectorAll('.mostrarvalor')

var arrayimg=new Array();
let prua1;
let insertarimg;

/////////////////////////////////////recoger valores de los menus////////////////////////////////////////

    for(let i= 0; i < hacerclic.length; i++){
        hacerclic[i].addEventListener ('click', () => {
            prua1=valordeetiquetap[i].textContent
            localStorage.setItem("contenido", JSON.stringify(prua1));
            // localStorage.setItem("imagenes", JSON.stringify(arrayimg));
            location.href='html/pagina-menus.html'
          
        }) 
        }
////////////////////////////insertar los menus en la pagina menus si se cumple la condicion////////////////////////

        addEventListener("load" , empezar)
        function empezar(){
            let abc=JSON.parse(localStorage.getItem("contenido"));
            insertarimg=abc;
             
        if(abc=='Sin alergias'){
        insertar() 
    }
    else{
        console.log('hay probllemas')
    }
}
/////////////////////// funcion para insertar los diferentes menus//////////////////////////////////////////////
        function insertar(){
            for(let i=0; i < imagenvacia.length; i++){
                imagenvacia[i].src=arrayimg[i] 
                }  
        }

////////////////////////////////////////////////recorriendo arrays/////////////////////////////////////////

        for(let i= 0; i < valordeetiquetap.length; i++){
        }
    
        for(let i= 0; i < arrayimg.length; i++){
        }
    
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("/images/menus/plato"+" " +"(" + i + ").png") 
        }


   








