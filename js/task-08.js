const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onControlsFilingAndSubmissionFormData)

function onControlsFilingAndSubmissionFormData(event) {
	event.preventDefault()
	const formElements = event.currentTarget.elements
	const inputEmail = [...formElements.email.value]
	const inputPass = [...formElements.password.value]
	const email = formElements.email.value
	const password = formElements.password.value

	if (inputPass.length <= 0 || inputEmail.length <= 0) {
		alert('Все поля должны быть заполнены!')
	} else {
		const formData = { email, password }
		formEl.reset()

		console.log(formData)
	}
}
