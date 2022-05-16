let counterNumberWrapper = document.getElementById('currentNumber')

let currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1
    counterNumberWrapper.innerHTML = currentNumber
}
function decrement() {
    currentNumber = currentNumber - 1
    counterNumberWrapper.innerHTML = currentNumber
}
