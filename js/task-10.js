const btnCreate = document.querySelector('[data-create]')
const dtnDestroy = document.querySelector('[data-destroy]')
const boxEl = document.querySelector('#boxes')
const controlElInput = document.querySelector('#controls input')

btnCreate.addEventListener('click', createBoxes)
dtnDestroy.addEventListener('click', destroyBoxes)

function createBoxes() {
	let box = 20
	for (let i = 0; i < Number(controlElInput.value); i += 1) {
		const createDiv = document.createElement('div')
		box += 10
		createDiv.style.backgroundColor = getRandomHexColor()
		createDiv.style.width = `${box}px`
		createDiv.style.height = `${box}px`
		boxEl.append(createDiv)
	}
}

function destroyBoxes() {
	controlElInput.value = ''
	boxEl.innerHTML = ''
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
