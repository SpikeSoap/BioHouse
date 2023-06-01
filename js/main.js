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



let arrayimg=new Array();
let varquerecogevalordelbotonmenu;
let insertarimg;
let arrayprecios=new Array()


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
            asigplatos()
            console.log(arrayprecios);
             
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
                        contcarrito.style.width="20%";  
                      
                    }
                    
                })
            }

            /////////////////////////////////////////////arrays de objetos/////////////////////////////////////////

            
let productos  = [ 
    {nombre: "CHILI SIN CARNE (VEGGIE)",precio:10 }, 
    {nombre: "LOMO DE BACALAO, CREMA DE SALMÓN AHUMADO, FLAN DE BRÓCOLI Y HABAS DE SOJA",precio:20 },  
    {nombre: "ESTOFADO DE CARRILLERA DE TERNERA Y VERDURAS DE INVIERNO",precio:12 },  
    {nombre: "FILETE DE SALMÓN, ARROZ BASMATI SALTEADO Y SALSA DE LIMÓN CONFITADO Y JENGIBRE",precio:15 },  
    {nombre: "PENNE CON SALMÓN, BRÓCOLI, TOMATES SECOS, CREMA DE HINOJO",precio:10 },  
    {nombre: "SURONCHU DEL MAR",precio:14 },  
    {nombre: "DÚO DE ALBÓNDIGAS DE TERNERA CON ARROZ BLANCO Y SALVAJE Y COMPOTA DE TOMATE",precio:18 },  
    {nombre: "FILETE DE POLLO MARINADO EN CURRY ROJO - LECHE DE COCO Y SU TRÍO DE ARROZ",precio:21 },  
    {nombre: "LASAÑA DE DOS SALMONES",precio:13 },  
    {nombre: "LOMO DE SALMÓN CON PIMENTÓN, DÚO DE LENTEJAS CON ZANAHORIA Y CEBOLLA",precio:10 },  
    {nombre: "NOIX DE SAINT JACQUES, PIQUILLOS AUX LARDONS, SAUTÉ DE HARICOTS COCO & CHOU-FLEUR",precio:19 },  
    {nombre: "FILETE DE POLLO, PURÉ DE PATATAS Y ESPINACAS",precio:22 },
    {nombre: "TAGINE DE VERDURAS MARROQUÍ CON ALBÓNDIGAS DE TERNERA",precio:27},
    {nombre: "PAELLA CON POLLO Y MARISCOS",precio:25 },
    {nombre: "ARROZ CON POLLO",precio:16 },
    {nombre: "FILETE DE POLLO, CALABAZA INFUSIONADA CON ANÍS ESTRELLADO Y CASTAÑAS.",precio:12 },
    {nombre: "PARMENTIER DE PALETILLA DE CORDERO Y BONIATO, DÁTILES Y NUECES, SALSA DE SÉSAMO NEGRO",precio:29 },
    {nombre: "VIEIRAS, PIMI TOS DE BACON, COCO SALTEADO Y COLIFLOR",precio:17 },
    ] 

    function asigplatos(){   
        let select= productos.filter(a => a.precio >'10'& a.precio<'17');
        for(let i=0; i<select.length; i++){
         arrayprecios.push (select[i].nombre)
     }} 
