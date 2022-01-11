const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

console.log(inputEl)

inputEl.addEventListener('input', onChangesFontSize)

function onChangesFontSize() {
	textEl.style.fontSize = inputEl.value + 'px'
}
