let display = document.getElementById("screen");
function allclear(){
    display.value = " ";
}
function show(n){
    display.value += n;

}
function calc(){
    display.value = eval(display.value)
}
function clearOne() {
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}

