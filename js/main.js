const btnPlatos = document.querySelector("#btn-cargar");
const divPlatos = document.querySelector(".cargar-platos");
// const foto1 = document.querySelector("#foto1");


let alergias = ["images/alergia1.png", "images/alergia2.png", "images/alergia3.png", "images/alergia4.png", "images/alergia5.png"];


btnPlatos.addEventListener("click", () => {
    divPlatos.style.height = "300vh";
    divPlatos.style.width = "100%";


    for (let i = 0; i < alergias.length; i++) {
        
        let imgFoto = document.createElement("img");
        imgFoto.style.width = "18%";
        imgFoto.id = "imagen" + i;
        imgFoto.src = alergias[i];
    }

});