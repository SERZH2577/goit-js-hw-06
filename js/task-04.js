let counterValue = 0

const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value')

decrementBtn.addEventListener('click', onDecrementValues)
incrementBtn.addEventListener('click', onIncrementValues)

function onDecrementValues() {
	counterValue -= 1
	updateValueUI()
}

function onIncrementValues() {
	counterValue += 1
	updateValueUI()
}

function updateValueUI() {
	valueEl.textContent = counterValue
}
