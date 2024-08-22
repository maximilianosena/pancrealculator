
let ratio = document.getElementById("ratio")
let cdad_tabla = document.getElementById("cdad_tabla")
let carbohidratos = document.getElementById("carbohidratos")
let grasa = document.getElementById("grasa")
let proteina = document.getElementById("proteina")
let fibra = document.getElementById("fibra")
let input_resultado = document.getElementById("resultado")
let aComer = document.getElementById("comer")
let button = document.getElementById("button")
let total = 0
let insulina = 0

function calculadora() {
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

    input_resultado.innerHTML = `${insulina} unidades de Insulina`
}


function resultado_final(){

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
        input_resultado.textContent = "Ingrese un valor numérico"
    } else {
        calculadora()
    }}

button.addEventListener("click", ()=>{
    resultado_final()
})

