var cijfers = document.getElementsByClassName('cijfer');
const cijferdiv = document.querySelector('.cijfers');
const textGemiddelde = document.querySelector('.end');
const addCijfer = document.querySelector('.btnadd');
const userInput = document.querySelector('.addcijfer');
var totaal = [];
var sum = 0;

window.onload = function(){
    bereken();
   
}

function bereken(){
        
    for(var i = 0; i < cijfers.length; i++){
        var reg = RegExp(/[^0-9]*/g)
        var num = cijfers[i].textContent.replace(reg, "");
        var cijfer = parseInt(num);
        totaal.push(cijfer);
    }
 
    for(var i = 0; i < totaal.length; i++){
        sum += totaal[i];       
    }
 
    var av = sum / totaal.length;
    if(av >= 5.5){
        textGemiddelde.style.color = 'green';
    }
    else{
        textGemiddelde.style.color = 'red';
    }
    textGemiddelde.textContent = av;   

}

addCijfer.addEventListener('click', () =>{
    var newCijfer = userInput.value;
    cijfers.push(newCijfer);
    bereken();
    

});