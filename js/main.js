////// GORKA ///////

let cabecera = document.querySelector(".cabecera");
let contLogo = document.querySelector(".fig-logo");
let logo = document.querySelector(".logo");


addEventListener("wheel", (e) => {
    cabecera.style.position = "fixed";
    cabecera.style.top = "0px";
    
    if (window.scrollY == 0) {
        contLogo.style.scale="1";
        contLogo.style.marginTop="1%";
     } else {
        contLogo.style.scale="1.5";
        contLogo.style.marginTop="2%";
     }

});




///////////////////////////////////////alex programation////////////////////////////////////////////////

const hacerclic=document.querySelectorAll('.plato-filtro');
const imagenvacia=document.querySelectorAll('.imagen');
const valordeetiquetap=document.querySelectorAll('.mostrarvalor');
const clicimagen=document.querySelectorAll('.imagen');



var arrayimg=new Array();
let varquerecogevalordelbotonmenu;
let insertarimg;



/////////////////////////////////////recoger valores de los menus////////////////////////////////////////

    for(let i= 0; i < hacerclic.length; i++){
        hacerclic[i].addEventListener ('click', () => {
            varquerecogevalordelbotonmenu=valordeetiquetap[i].textContent
            localStorage.setItem("contenido", JSON.stringify(varquerecogevalordelbotonmenu));
            localStorage.setItem("imagenes", JSON.stringify(arrayimg));
            location.href='html/menus.html'
        }) 
        }
////////////////////////////insertar los menus en la pagina menus si se cumple la condicion////////////////////////

        addEventListener("load" , empezar)
        function empezar(){
            let abc=JSON.parse(localStorage.getItem("contenido"));
            insertarimg=abc;
             
        if(abc=='Sin alergias'){
            for (let i = 1; i<=16 ; i++){
                arrayimg.push("../images/sinalergias/plato"+" " +"(" + i + ").png") 
            }
        insertar() 
    }
    if (abc=='Sin gluten'){
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("../images/singluten/sg" + i +".jpg") 
        }
        insertar() 
       
    }
    if (abc=='Sin lactosa'){
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("../images/sinlactosa/sl" + i +".jpg") 
        }
        insertar() 
       
    }
    if (abc=='Sin colesterol'){
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("../images/sincolesterol/sc" + i +".jpg") 
        }
        insertar() 
       
    }
    if (abc=='Diabéticos'){
        for (let i = 1; i<=16 ; i++){
            arrayimg.push("../images/diabeticos/db" + i +".jpg") 
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

        addEventListener("load" , () => {
            for(let i= 0; i < valordeetiquetap.length; i++){
            }
        })
        
        addEventListener("load" , () => {
            for(let i= 0; i < arrayimg.length; i++){
            }
        })
       
      
            for(let i= 0; i < clicimagen.length; i++){
                clicimagen[i].addEventListener("click", () => {
                    let contcarrito=document.getElementById('carrito')
                    if( contcarrito.style.width=="0%"){
                        contcarrito.style.width="10%";  
                        
                    }
                    
                })
            }