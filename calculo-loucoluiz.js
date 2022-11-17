const inputAc = document.querySelector("#ac")
const inputAgh = document.querySelector("#agh")
const inputTri1 = document.querySelector("#tri1")
const inputTri2 = document.querySelector("#tri2")
const btn = document.querySelector("#btn")

let ac 
let agh 
let tri1 
let tri2

btn.addEventListener("click",(()=>{
    ac = Number(inputAc.value)
    agh = Number(inputAgh.value)
    tri1 = Number(inputTri1.value)
    tri2 = Number(inputTri2.value)

    // let elemets = document.querySelectorAll(".form > *")
    // for (let i = 0; i < elemets.length; i++) {
    //         elemets[i].remove()
    // }

    let at = (((ac*3)+(agh*2)) - 60) / 5
    let tri3 = ((tri1 + (tri2*2)) -36)/3
    let ano = ((ac*3+agh*2)+tri3*10)/5


    res("#at",at)
    res("#tri3",tri3)
    res("#ano",ano)

}))


function res(lugar,nota){
    document.querySelector(lugar).innerHTML = Math.abs((Math.round(nota * 100) / 100).toFixed(1))
}
