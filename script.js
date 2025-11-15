
let ratio = document.getElementById("ratio")
let forma_unidad = document.getElementById("forma")
let cdad_tabla = document.getElementById("cdad_tabla")
let carbohidratos = document.getElementById("carbohidratos")
let grasa = document.getElementById("grasa")
let proteina = document.getElementById("proteina")
let fibra = document.getElementById("fibra")
let input_resultado = document.getElementById("resultado")

let button = document.getElementById("button")
let container = document.getElementById("container_cantidad")
let total = 0
let insulina = 0
const valor = forma_unidad.value;

 if (valor ==='' || !valor) {
    button.disabled = true
}

forma_unidad.addEventListener('change', () => {

    if (valor==='gramos')
    {
    localStorage.setItem('forma', valor);
    container.innerHTML= `<span class="input-group-text" >¿Cuantos ${valor} consumirá?:</span> <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="fibra" id="comer" value="0">`
    button.disabled = false
} else {
    localStorage.setItem('forma', valor);
    container.innerHTML= `<span class="input-group-text" >¿Cuantas ${valor} consumirá?:</span> <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="fibra" id="comer" value="0">`
    button.disabled = false
}
});



function calculadora() {
    let aComer = document.getElementById("comer")
    let ratioValue = parseFloat(ratio.value)
    let cdadValue = parseFloat(cdad_tabla.value)
    let aComerValue = parseFloat(aComer.value)
    let tercerValor = 1
    let carbohidratosValue = parseFloat(carbohidratos.value)
    let grasaValue = parseFloat(grasa.value)
    let proteinaValue = parseFloat(proteina.value)
    let fibraValue = parseFloat(fibra.value)
    let grasaExcedente = 0
    let proteinaExcedente = 0



    if (grasaValue >= 20) {
        while (grasaValue>20){
            grasaExcedente += .5
            grasaValue -= 10
        }
    } else {
        grasaValue = 0
    }

    if (proteinaValue > 20 ) {
            proteinaExcedente += ((proteinaValue - 20)/2)     
    }

     total = ((carbohidratosValue + (proteinaExcedente*10) + (grasaExcedente*10) - (fibraValue*10))/ ratioValue)
     console.log(total)

    let x = (aComerValue * tercerValor) / cdadValue

    insulina = total*x
    
    if (insulina <= 1){
        input_resultado.innerHTML = `${insulina.toFixed(2)} unidad de Insulina`
    } else {
     input_resultado.innerHTML = `${insulina.toFixed(2)} unidades de Insulina`
}
}



function resultado_final(){

    let aComer = document.getElementById("comer")
    let aComerValue = parseFloat(aComer.value)
    let ratioValue = parseFloat(ratio.value)
    let cdadValue = parseFloat(cdad_tabla.value)
    let carbohidratosValue = parseFloat(carbohidratos.value)
    let grasaValue = parseFloat(grasa.value)
    let proteinaValue = parseFloat(proteina.value)
    let fibraValue = parseFloat(fibra.value)

    if (Number.isNaN(ratioValue)||
        Number.isNaN(cdadValue)||
        Number.isNaN(carbohidratosValue)||
        Number.isNaN(grasaValue)||
        Number.isNaN(proteinaValue)||
        Number.isNaN(fibraValue)){
        console.log("Ingrese un valor numérico")
        console.log(ratioValue)
        console.log(cdadValue)
        console.log(carbohidratosValue)
        console.log(grasaValue)
        console.log(proteinaValue)
        console.log(fibraValue)
        input_resultado.textContent = "No ingrese letras en los campos"
    } else if (ratioValue <= 0||
        cdadValue <= 0||
        carbohidratosValue <= 0||
        aComerValue <= 0) {
            input_resultado.textContent = "Ingrese un valor numérico en los campos resaltados"
            ratio.classList.add('error')
            cdad_tabla.classList.add('error')
            carbohidratos.classList.add('error')
            aComer.classList.add('error')
    } else {
        ratio.classList.remove('error')
        cdad_tabla.classList.remove('error')
        carbohidratos.classList.remove('error')
        aComer.classList.remove('error')
        ratio.classList.add('ok')
        cdad_tabla.classList.add('ok')
        carbohidratos.classList.add('ok')
        aComer.classList.add('ok')
        calculadora()
    }}


window.addEventListener("beforeunload", () => {
    localStorage.removeItem("forma");
});

button.addEventListener("click", ()=>{
    resultado_final()
})

