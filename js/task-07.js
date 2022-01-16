const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

console.log(inputEl)

inputEl.addEventListener('input', onChangesFontSize)
inputEl.setAttribute('value', 16)

function onChangesFontSize() {
	textEl.style.fontSize = inputEl.value + 'px'
}
