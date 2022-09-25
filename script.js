let input = document.getElementById('inputext')
function calculate(number){
    input.value += number
    console.log(number)
}
function clr(){
    input.value =""
}
function del(){
    input.value = input.value.slice(0,-1)
}
function result(){
    try{
        input.value = eval(input.value)
    }catch(err){
        alert("Give a valid input");
    }
}


// not working
var keyequal = document.querySelector('#inputext')
keyequal.addEventListener('keydown', e => {
    // console.log(e)
    if(e.keycode == 187){
        input.value = input.value.slice(0,-1)
        result('=')
        // input.value = input.value.slice(0,-1)
        // input.value = eval(input.value)
        // console.log(input.value)    
        // alert("Give a valid input");
        // console.log('answer..')
    }
})