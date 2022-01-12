const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFoo)

function onFoo(event) {
	event.preventDefault()
	const formElements = event.currentTarget.elements
	const inputEmail = [...formElements.email.value]
	const inputPass = [...formElements.password.value]
	const email = formElements.email.value
	const password = formElements.password.value

	if (inputPass.length <= 0 || inputEmail.length <= 0) {
		alert('Все поля должны быть заполнены!')
	} else {
		formEl.reset()
	}

	const formData = { email, password }

	console.log(formData)
}
