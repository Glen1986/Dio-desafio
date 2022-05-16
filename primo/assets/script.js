var counterNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1
    counterNumberWrapper.innerHTML = currentNumber
}
function decremeent() {
    currentNumber = currentNumber - 1
    counterNumberWrapper.innerHTML = currentNumber
}
