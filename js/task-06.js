const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onChecksQuantityCharactersInputting)

function onChecksQuantityCharactersInputting(event) {
	if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
		inputEl.setAttribute('class', 'valid')
	} else {
		inputEl.setAttribute('class', 'invalid')
	}
}
