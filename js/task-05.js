const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', onOutputInputting)

function onOutputInputting(event) {
	outputEl.textContent = event.currentTarget.value

	if (event.currentTarget.value.length <= 0) {
		outputEl.textContent = 'Anonymous'
	}
}
