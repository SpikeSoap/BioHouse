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
let varquerecogevalordelbotonmenu;
let insertarimg;

/////////////////////////////////////recoger valores de los menus////////////////////////////////////////

    for(let i= 0; i < hacerclic.length; i++){
        hacerclic[i].addEventListener ('click', () => {
            varquerecogevalordelbotonmenu=valordeetiquetap[i].textContent
            localStorage.setItem("contenido", JSON.stringify(varquerecogevalordelbotonmenu));
            localStorage.setItem("imagenes", JSON.stringify(arrayimg));
            location.href='html/pagina-menus.html'


          
        }) 
        }
////////////////////////////insertar los menus en la pagina menus si se cumple la condicion////////////////////////

        addEventListener("load" , empezar)
        function empezar(){
            let abc=JSON.parse(localStorage.getItem("contenido"));
            insertarimg=abc;
             
        if(abc=='Sin alergias'){
            for (let i = 1; i<=16 ; i++){
                arrayimg.push("/images/sinalergias/plato"+" " +"(" + i + ").png") 
            }
        insertar() 
    }
    if (abc=='Sin gluten'){
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("/images/singluten/sg" + i +".jpg") 
        }
        insertar() 
       
    }
    if (abc=='Sin lactosa'){
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("/images/sinlactosa/sl" + i +".jpg") 
        }
        insertar() 
       
    }
    if (abc=='Sin colesterol'){
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("/images/sincolesterol/sc" + i +".jpg") 
        }
        insertar() 
       
    }
    if (abc=='Diabéticos'){
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("/images/diabeticos/db" + i +".jpg") 
        }
        insertar() 
       
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
    
      


   








