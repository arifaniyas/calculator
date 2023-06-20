function disData(data){
    display.value=display.value + data
}
function allClear(){
    display.value=""
}
function backSpace(){

    display.value= display.value.slice(0,-1)
}
function outputOp(){
    display.value=eval(display.value)
    

}