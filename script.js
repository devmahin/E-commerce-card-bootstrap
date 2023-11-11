function MainusProduct (){
    let textbox = document.getElementById("textbox")
    if(textbox.value<= 0){
        textbox.value = 0;
        alert("Pls add product")
    }else{
        textbox.value = parseInt(textbox.value) - 1
    }

}
function PlusProduct (){
    let textbox = document.getElementById("textbox")
    if(textbox.value >= 5){
        textbox.value = 5;
        textbox.style.backgroundColor = "red"
        alert("Max 5 allowed")
    }else{
        textbox.value = parseInt(textbox.value) - 1
    }

}