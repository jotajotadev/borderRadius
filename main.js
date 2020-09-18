let buttonTopLeft = document.getElementById("topLeft");
let buttonTopRight = document.getElementById("topRight");
let buttonBottomLeft = document.getElementById("bottomLeft");
let buttonBottomRight = document.getElementById("bottomRight");
const showProperties = document.getElementById("showProperties");
const copyText = document.getElementById("copy");
const restart = document.getElementById("restart");
const shape = document.getElementById("shape");

const restartFunction = () => {
    shape.style.borderRadius = 0;
    valor = 0;
    valor2 = 0;
    valor3 = 0;
    valor4 = 0;
    nueva();
}

const nueva = () => {
    let result = `border-radius: ${valor3}px ${valor4}px ${valor2}px ${valor}px;`;
    showProperties.textContent = result;
}
const copyTextFunction = () => {
    let selection = document.createRange(); // crea un rango de seleccion
    selection.selectNodeContents(showProperties); // se añade a la seleccion en elemento
    window.getSelection().removeAllRanges(); //elimina todas las selectiones
    window.getSelection().addRange(selection)  //agregamos el elmento a seleccionar
    let res = document.execCommand("copy") //copia el elemento seleccionado
    if(res) {
        window.getSelection().removeRange(selection) //elemina la seleccion sobre el elmento 
    } else {
        showProperties.textContent = "Primero aplica un valor para poder copiar"
    }
}

copyText.addEventListener("click", copyTextFunction);
restart.addEventListener("click", restartFunction);
let valor = 0;
buttonBottomLeft.addEventListener("click", function(){
    let aplicar;
    aplicar = valor + "px";
    shape.style.borderBottomLeftRadius = aplicar;
    valor += 10;
    nueva()
});

let valor2 = 0;
buttonBottomRight.addEventListener("click", function(){
    let aplicar;
    aplicar = valor2 + "px";
    shape.style.borderBottomRightRadius = aplicar;
    valor2 += 10;
    nueva()
});
let valor3 = 0;
buttonTopLeft.addEventListener("click", function(){
    let aplicar;
    aplicar = valor3 + "px";
    shape.style.borderTopLeftRadius = aplicar;
    valor3 += 10;
    nueva()
});
let valor4 = 0;
buttonTopRight.addEventListener("click", function(){
    let aplicar;
    aplicar = valor4 + "px";
    shape.style.borderTopRightRadius = aplicar;
    valor4 += 10;
    nueva()
});

restartFunction();