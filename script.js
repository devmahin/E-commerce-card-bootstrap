const totalammount = document.getElementById("totalammount")
const total_ammount_vat = document.getElementById("total-amount-vat")
const chanrge = document.getElementById("charge")
const dis_code = document.getElementById("dis_code")
function MainusProduct (inc,price){
    let textbox = document.getElementById(inc)
    let prices = document.getElementById(price)

    if(textbox.value<= 0){
        textbox.value = 0;
        alert("Pls add product")
    }else{
        textbox.value = parseInt(textbox.value) - 1;
        textbox.style.backgroundColor = "#fff";
        prices.innerHTML = parseInt(prices.innerHTML) - 15;
        totalammount.innerHTML = parseInt(totalammount.innerHTML) - 15;
        total_ammount_vat.innerHTML = parseInt(totalammount.innerHTML) + parseInt(chanrge.innerHTML) 
    }
}


function PlusProduct (inc,price){
    const textbox = document.getElementById(inc)
    let prices = document.getElementById(price)
    if(textbox.value >= 5){
        textbox.value = 5;
        textbox.style.backgroundColor = "red"
        alert("Max 5 allowed")
    }else{
        textbox.value = parseInt(textbox.value) + 1;
        prices.innerHTML = parseInt(prices.innerHTML) + 15;
        totalammount.innerHTML = parseInt(totalammount.innerHTML) + 15;
        total_ammount_vat.innerHTML = parseInt(totalammount.innerHTML) + parseInt(chanrge.innerHTML) 
    }

}



function discountCode (){
    let totalCurr = parseInt(total_ammount_vat.innerHTML)
    let erroeTrw = document.getElementById("erroeTrw")
    console.log(dis_code.value)
    if(dis_code.value === "mahin" || dis_code.value === "antor" ){
        let newTotal = totalCurr - 15;
        total_ammount_vat.innerHTML = newTotal
        erroeTrw.innerText = "Hurray discount 15 dollar"
        erroeTrw.style.color = "black";


    }else{
        erroeTrw.innerText = "Try code is not valid mahin"
        erroeTrw.style.color = "red"
    }
}