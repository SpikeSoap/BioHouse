


////// GORKA ///////



let cabecera = document.querySelector(".cabecera");
let contLogo = document.querySelector(".fig-logo");
let logo = document.querySelector(".logo");


addEventListener("wheel", (e) => {
    cabecera.style.position = "fixed";
    cabecera.style.top = "0px";

    if (window.scrollY == 0) {
        contLogo.style.scale = "1";
        contLogo.style.marginTop = "1%";
    } else {
        contLogo.style.scale = "1.5";
        contLogo.style.marginTop = "2%";
    }

});




///////////////////////////////////////alex programation////////////////////////////////////////////////

const hacerclic = document.querySelectorAll('.plato-filtro');
const imagenvacia = document.querySelectorAll('.imagen');
const valordeetiquetap = document.querySelectorAll('.mostrarvalor');
const clicimagen = document.querySelectorAll('.imagen');
const tituloplatos = document.querySelectorAll(".desc-menu");
const preciosMenu = document.querySelectorAll(".precio");
const recorrercarrito = document.getElementById("carrito");
const shopping = document.querySelector(".menu-shop")
const totalgeneral = document.getElementById('monto-total')
const BTNAGREGARALCART=document.querySelectorAll('.btn-agregar-car'); 




let arrayimg = new Array();
let varquerecogevalordelbotonmenu;
let insertarimg;
let arrayprecios = new Array()
let arrayplatos = new Array()
let imagendelbotonmenu;
let preciodelbotonmenu;
let precioDeMenus = 0;
let contador=0
let menuSelected=[];
let menuAddLocal=[];
let cantidad=1

let traerPrecio;
let traerSrc;
let traerCantidad;


/////////////////////////////////////recoger valores de los menus////////////////////////////////////////

for (let i = 0; i < hacerclic.length; i++) {
    hacerclic[i].addEventListener('click', () => {
        varquerecogevalordelbotonmenu = valordeetiquetap[i].textContent
        localStorage.setItem("contenido", JSON.stringify(varquerecogevalordelbotonmenu));
        localStorage.setItem("imagenes", JSON.stringify(arrayimg));
        location.href = 'html/menus.html'
    })
}
////////////////////////////insertar los menus en la pagina menus si se cumple la condicion////////////////////////

addEventListener("load", empezar)
function empezar() {
    let abc = JSON.parse(localStorage.getItem("contenido"));
    insertarimg = abc;

    asigprecioplatos()
    asigdescplatos()

    if (abc == 'Sin alergias') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/sinalergias/plato" + " " + "(" + i + ").png")
        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
    if (abc == 'Sin gluten') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/singluten/sg" + i + ".jpg")
        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
    if (abc == 'Sin lactosa') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/sinlactosa/sl" + i + ".jpg")
        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
    if (abc == 'Sin colesterol') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/sincolesterol/sc" + i + ".jpg")

        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
    if (abc == 'Diabéticos') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/diabeticos/db" + i + ".jpg")
        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
}
/////////////////////// funcion para insertar los diferentes menus//////////////////////////////////////////////

function insertar() {
    for (let i = 0; i < imagenvacia.length; i++) {
        imagenvacia[i].src = arrayimg[i]
    }
}

////////////////////////////////////////////////recorriendo arrays/////////////////////////////////////////

addEventListener("load", () => {
    for (let i = 0; i < valordeetiquetap.length; i++) {
    }
})



addEventListener("load", () => {
    for (let i = 0; i < arrayimg.length; i++) {
    }
})

//////////////enviar al carro, coger src de imagen, envian precio al span /////////////////////


for (let i = 0; i < BTNAGREGARALCART.length; i++) {
    BTNAGREGARALCART[i].addEventListener("click", () => {
        imagendelbotonmenu = clicimagen[i].src;//esta es la ruta del src de la imagen del plato seleccionado
        precioDeMenus = preciosMenu[i].textContent//este es el precio de los menus

       menuSelected=[];
       arrayblanco()
       guardarenlocal()

       traerDelLocal()
console.log(traerPrecio)
console.log(traerSrc)
console.log(traerCantidad)




        let contcarrito = document.getElementById('carrito')
        let visualizar = document.getElementById('inf-primerafila-cart')


        for (let i = 0; i < preciosMenu.length; i++) {

        }

        if (contcarrito.style.width == "0%") {
            contcarrito.style.visibility = "visible"
            contcarrito.style.width = "20%"
            visualizar.style.display = "block"
        }

        // createcarro()
    })
}


///////////////////////////////trabajar con los datos para el carro 
function arrayblanco(){
    menuSelected=[ precioDeMenus ,  imagendelbotonmenu ,cantidad]
}

function guardarenlocal(){
    menuAddLocal.push({precio: menuSelected[0], srcimagen:menuSelected[1],cantidad:menuSelected[2]})
    localStorage.setItem("contenido", JSON.stringify(menuAddLocal));
}

function traerDelLocal(){
    let sacarUltimoValor
let arrayDelLocal = JSON.parse(localStorage.getItem('contenido'));
sacarUltimoValor=arrayDelLocal[arrayDelLocal.length-1];

traerPrecio=sacarUltimoValor.precio;
traerSrc=sacarUltimoValor.srcimagen;
traerCantidad=sacarUltimoValor.cantidad

}


////////////////////////////////////arrays de objetos yusra/////////////////////////////////////////


let productos = [
    { nombre: "CHILI SIN CARNE (VEGGIE)", precio: '10.99' },
    { nombre: "LOMO DE BACALAO, CREMA DE SALMÓN AHUMADO, FLAN DE BRÓCOLI Y HABAS DE SOJA", precio: '20.99' },
    { nombre: "ESTOFADO DE CARRILLERA DE TERNERA Y VERDURAS DE INVIERNO", precio: '12.10' },
    { nombre: "FILETE DE SALMÓN, ARROZ BASMATI SALTEADO Y SALSA DE LIMÓN CONFITADO Y JENGIBRE", precio: '15.20' },
    { nombre: "PENNE CON SALMÓN, BRÓCOLI, TOMATES SECOS, CREMA DE HINOJO", precio: '10.99' },
    { nombre: "SURONCHU DEL MAR", precio: '14.99' },
    { nombre: "DÚO DE ALBÓNDIGAS DE TERNERA CON ARROZ BLANCO Y SALVAJE Y COMPOTA DE TOMATE", precio: '18.99' },
    { nombre: "FILETE DE POLLO MARINADO EN CURRY ROJO - LECHE DE COCO Y SU TRÍO DE ARROZ", precio: '21.99' },
    { nombre: "LASAÑA DE DOS SALMONES", precio: '13.60' },
    { nombre: "LOMO DE SALMÓN CON PIMENTÓN, DÚO DE LENTEJAS CON ZANAHORIA Y CEBOLLA", precio: '10.70' },
    { nombre: "NOIX DE SAINT JACQUES, PIQUILLOS AUX LARDONS, SAUTÉ DE HARICOTS COCO & CHOU-FLEUR", precio: '19.90' },
    { nombre: "FILETE DE POLLO, PURÉ DE PATATAS Y ESPINACAS", precio: '22.55' },
    { nombre: "TAGINE DE VERDURAS MARROQUÍ CON ALBÓNDIGAS DE TERNERA", precio: '12.99' },
    { nombre: "PAELLA CON POLLO Y MARISCOS", precio: '24.90' },
    { nombre: "helado de fresas", precio: '16.30' },
    { nombre: "FILETE DE POLLO, CALABAZA INFUSIONADA CON ANÍS ESTRELLADO Y CASTAÑAS.", precio: '12.99' },
    { nombre: "PARMENTIER DE PALETILLA DE CORDERO Y BONIATO, DÁTILES Y NUECES, SALSA DE SÉSAMO NEGRO", precio: '29.99' },
    { nombre: "VIEIRAS, PIMI TOS DE BACON, COCO SALTEADO Y COLIFLOR", precio: '17.150' },
]

function asigprecioplatos() {
    let select = productos.filter(a => a.precio > '0.00');
    for (let i = 0; i < select.length; i++) {
        arrayprecios.push(select[i].precio)
    }
}

function asigdescplatos() {
    let select = productos.filter(a => a.nombre > '0');
    for (let i = 0; i < select.length; i++) {
        arrayplatos.push(select[i].nombre)
    }
}


function recorrerplatos() {
    for (let i = 0; i < tituloplatos.length; i++) {
        tituloplatos[i].innerHTML = arrayplatos[i]
    }
}

function recorrerprecios() {
    for (let i = 0; i < preciosMenu.length; i++) {
        preciosMenu[i].innerHTML = arrayprecios[i]
    }
}


////////carrito crear y eliminar/////////

function createcarro() {
    let div
    let imagen
    let pasta
    let cantidad
    let borrar
    let div2
    let opciones


    div = document.createElement("div")
    div.className = "product-shop"
    shopping.appendChild(div)

    imagen = document.createElement("img")
    imagen.className = "img-select"
    imagen.src = imagendelbotonmenu
    div.appendChild(imagen)

    pasta = document.createElement("span")
    pasta.className = "precio-art-carrito"
    pasta.textContent = cantidaddeplatosseleccionados + '€'
    div.appendChild(pasta)

    div2 = document.createElement("div")
    div2.className = "botones"
    div.appendChild(div2)

    cantidad = document.createElement("select");
    cantidad.className = "Cant-prod";
    cantidad.textContent = '';
    div2.appendChild(cantidad);

    for (let i = 1; i <= 5; i++) {
        opciones = document.createElement("option");
        opciones.className = "cant-opt";
        opciones.value = i;
        opciones.textContent = i;
        cantidad.appendChild(opciones);

    }

    borrar = document.createElement('img')
    borrar.className = 'btn-clear'
    borrar.src = '../images/papelera.png'
    div2.appendChild(borrar)


    /////////////////funcion donde borrar y coger valores del carro, no funciona en mas ningun lado//////////

    //   let preciodelspandelcarrito=new Array()
    let preciodelspandelcarrito;
    carrito.addEventListener('click', e => {

        if (e.target == borrar) {
            shopping.removeChild(div)
        }
    })

    carrito.addEventListener('change', e => {
        if (e.target == cantidad) {
            multiplicar()
        }
        pasta.textContent = preciodelspandelcarrito + '€';
       
    })
    
    function multiplicar() {
        preciodelspandelcarrito=(parseFloat(cantidad.value) * parseFloat(cantidaddeplatosseleccionados));
    }
}
















