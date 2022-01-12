const outputEl = document.querySelector('.color')
const btnEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')

btnEl.addEventListener('click', onChangesBackgroundColorBody)

function onChangesBackgroundColorBody() {
	outputEl.textContent = getRandomHexColor()
	bodyEl.style.backgroundColor = outputEl.textContent
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
