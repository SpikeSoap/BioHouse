const btnCesta = document.getElementById("btn-carrito");
const cuerpofactura=document.querySelector('#pruebadelp')
const cuerpo=document.querySelector('.list-pedido')


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

const clicBtnMenu = document.querySelectorAll('.plato-filtro');
const figPagMenu = document.querySelectorAll('.imagen');
const valordeetiquetap = document.querySelectorAll('.mostrarvalor');
const tituloplatos = document.querySelectorAll(".desc-menu");
const preciosMenu = document.querySelectorAll(".precio");
const recorrercarrito = document.getElementById("carrito");
const shopping = document.querySelector(".menu-shop")
const listPedido = document.querySelector(".list-pedido");
const totalgeneral = document.getElementById('monto-total')
const addToCart=document.querySelectorAll('.btn-agregar-car'); 
let montoTotal=document.getElementById('precio-total-carro')
let container=document.querySelectorAll('.cont-de-menus')




let arrayimg = [];
let getValueBtnMenu;
let insertarimg;
let arrayprecios = new Array();
let arrayplatos = new Array();
let imagendelbotonmenu;
let preciodelbotonmenu;
let precioDeMenus = 0;
let contador = 0;
let menuSelected = [];
let menuAddLocal = [];
let reemplazoDelLocal=[];
let cambioCantidad=[];
let modificadoLocal=[];
let cantidad = 1;
let recogerIdDiv
let traerPrecio;
let traerSrc;
let traerCantidad;
let traerId;
let cont=0;
let clonarEnLocal;

/////////////////////////////////////recoger valores de los menus////////////////////////////////////////

for (let i = 0; i < clicBtnMenu.length; i++) {
    clicBtnMenu[i].addEventListener('click', () => {
        getValueBtnMenu = valordeetiquetap[i].textContent
        localStorage.setItem("textomenu", JSON.stringify(getValueBtnMenu));
        localStorage.setItem("imagenes", JSON.stringify(arrayimg));
        location.href = 'html/menus.html'
    })
    for (let i = 0; i < valordeetiquetap.length; i++) {
    }
}
////////////////////////////insertar los menus en la pagina menus si se cumple la condicion////////////////////////

addEventListener("load", empezar)
function empezar() {
    let tipoDeMenu = JSON.parse(localStorage.getItem("textomenu"));
    insertarimg = tipoDeMenu;

    asigprecioplatos()
    asigdescplatos()

    if (tipoDeMenu == 'Sin alergias') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/sinalergias/plato" + " " + "(" + i + ").png")
        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
    if (tipoDeMenu == 'Sin gluten') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/singluten/sg" + i + ".jpg")
        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
    if (tipoDeMenu == 'Sin lactosa') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/sinlactosa/sl" + i + ".jpg")
        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
    if (tipoDeMenu == 'Sin colesterol') {
        for (let i = 1; i <= 16; i++) {
            arrayimg.push("../images/sincolesterol/sc" + i + ".jpg")

        }
        insertar()
        recorrerplatos()
        recorrerprecios()
    }
    if (tipoDeMenu == 'Diabéticos') {
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
                            
                        ///aqui hay dos opciones una de ellas es traer el array de fotos del local

    // let srcDelLocal = JSON.parse(localStorage.getItem("imagenes"));
    for (let i = 0; i < figPagMenu.length; i++) {
        // figPagMenu[i].src = srcDelLocal[i]
        figPagMenu[i].src = arrayimg[i]  
    }
    // for (let i = 0; i < srcDelLocal.length; i++) {
    // }
    for (let i = 0; i < arrayimg.length; i++) {
    }
    
}

//////////////enviar al carro, coger src de imagen, envian precio al span /////////////////////


for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", () => {
        imagendelbotonmenu = figPagMenu[i].src;//esta es la ruta del src de la imagen del plato seleccionado
        precioDeMenus = preciosMenu[i].textContent//este es el precio de los menus
        recogerIdDiv=container[i].id

       
       arrayblanco()
       guardarenlocal()
       sumaTotalGeneral()
        traerDelLocal()

    
        let contcarrito = document.getElementById('carrito')
        let visualizar = document.getElementById('inf-primerafila-cart')

        if (contcarrito.style.width == "0%") {
            contcarrito.style.visibility = "visible"
            contcarrito.style.width = "20%"
            visualizar.style.display = "block"
        }
     
        createcarro()
         localStorage.removeItem('modificado')
    })
}


for(i=0; i<container.length;i++){
   
 }

///////////////////////////////trabajar con los datos para el carro 
function arrayblanco() {
    menuSelected = [precioDeMenus, imagendelbotonmenu, cantidad ,recogerIdDiv]
}

function guardarenlocal() {
   
    menuAddLocal.push({id: menuSelected[3], precio: menuSelected[0], srcimagen: menuSelected[1], cantidad: menuSelected[2] })
    localStorage.setItem("contenido", JSON.stringify(menuAddLocal));

    ////////Aqui en la clonacion del local meto tambien el ultimo valor q entro al carro

    clonarEnLocal=JSON.parse(localStorage.getItem('contenido'));
    clonarEnLocal=menuAddLocal[menuAddLocal.length - 1];
    modificadoLocal.push(clonarEnLocal)
    localStorage.setItem("contenidoModificado", JSON.stringify(modificadoLocal));
}

function traerDelLocal() {
    let sacarUltimoValor
    let arrayDelLocal = JSON.parse(localStorage.getItem('contenidoModificado'));
    sacarUltimoValor = arrayDelLocal[arrayDelLocal.length - 1];

    traerPrecio = sacarUltimoValor.precio;
    traerSrc = sacarUltimoValor.srcimagen;
    traerCantidad = sacarUltimoValor.cantidad;
    traerId=sacarUltimoValor.id;

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
let idDiv
let idDel
let prua
let savePrice
let traerCarrito
let valorUltimo

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
    div.id=recogerIdDiv
    shopping.appendChild(div)


    imagen = document.createElement("img")
    imagen.className = "img-select"
    imagen.src = traerSrc
    div.appendChild(imagen)

    pasta = document.createElement("span")
    pasta.className = "precio-art-carrito"
    pasta.textContent = traerPrecio + '€'
    pasta.value=traerPrecio
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
    borrar.alt=div.id
    borrar.src = '../images/papelera.png'
    div2.appendChild(borrar)


    /////////////////funcion donde borrar y coger valores del carro, no funciona en mas ningun lado//////////


    carrito.addEventListener('click', e => {

        if (e.target ==borrar) {                //////////borrar carro
            shopping.removeChild(div)
            idDel=borrar.alt

            console.log(idDel)

           
            let localDeleteClone
            localDeleteClone=JSON.parse(localStorage.getItem('contenidoModificado'));
            localDeleteClone =localDeleteClone.filter(item => item.id!==idDel)
            localStorage.setItem('contenidoModificado', JSON.stringify(localDeleteClone));
            console.log(localDeleteClone)


            let localDelete
            localDelete=JSON.parse(localStorage.getItem('contenido'));
            localDelete =localDeleteClone.filter(item => item.id!==idDel)
            localStorage.setItem('contenido', JSON.stringify(localDelete));
            console.log(localDelete)
        }
    })

    carrito.addEventListener('click', e => {
        if (e.target == cantidad) {
            savePrice=pasta.value
            idDiv=div.id

           
            reemplazoDelLocal=JSON.parse(localStorage.getItem('contenidoModificado'));
            reemplazoDelLocal = reemplazoDelLocal.filter(item => item.id!==idDiv)
            localStorage.setItem('contenidoModificado', JSON.stringify(reemplazoDelLocal));
            console.log(reemplazoDelLocal)

            localReemplazo()
            localAsignar()
            sumaTotalGeneral()  
        }   
    })

    carrito.addEventListener('change', e => {
        if (e.target == cantidad) {    
            
            pasta.textContent=((parseInt(cantidad.value) * parseFloat(savePrice)).toFixed(2));

            cambioCantidad.push(pasta.textContent)
            localStorage.setItem("cambiosCantidad", JSON.stringify(cambioCantidad));

            let changeMonto = JSON.parse(localStorage.getItem('cambiosCantidad'));
            valorUltimo=changeMonto[changeMonto.length - 1];
            
            // valorUltimo=pasta.textContent
           
        } 
    })
    
}


/////////////////////////////sumar total general/////////////////////////
let sumaCarrito
function sumaTotalGeneral(){
    traerCarrito = JSON.parse(localStorage.getItem("contenidoModificado"));
    let sacarPrecioTotal = traerCarrito.filter(a => a.precio)
    
    let sumartotal= sacarPrecioTotal.reduce((a,b )=>parseFloat(a)  +parseFloat (b.precio) ,0) ;
    sumaCarrito=sumartotal
    montoTotal.textContent=sumaCarrito.toFixed(2)
}

//////////////////////////reemplazar en el local


function localReemplazo(){
    modificadoLocal=JSON.parse(localStorage.getItem("contenidoModificado"));
}

function localAsignar(){
    
    modificadoLocal.push({id: idDiv, precio: valorUltimo, srcimagen: menuSelected[1], cantidad: menuSelected[2] })
    localStorage.setItem('contenidoModificado', JSON.stringify(modificadoLocal));
}

////////////////////////////Propiedad de Gorka, no tocar o mueres//////////////////////////////////////////////


if(btnCesta){
    btnCesta.addEventListener("click", () => {
        sumarItemCart()
        location.href = 'factura.html'
        
    });
}

     
    let getCarrito
    let filtrisrc
    let filtrprecio
    let localfiltrisrc
    let localfiltrprecio
function sumarItemCart() {

    getCarrito = JSON.parse(localStorage.getItem("contenido"));
    filtrisrc = traerCarrito.map(a => a.srcimagen)
    filtrprecio=traerCarrito.map(a => a.precio)

    localStorage.setItem("rutaImg", JSON.stringify(filtrisrc));
    localStorage.setItem("precioSave", JSON.stringify(filtrprecio));
}

addEventListener('load',()=>{

    localfiltrisrc = JSON.parse(localStorage.getItem("rutaImg"));
    localfiltrprecio = JSON.parse(localStorage.getItem("precioSave"));

    console.log(localfiltrisrc,localfiltrprecio)
})
    



