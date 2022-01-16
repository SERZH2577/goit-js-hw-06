const itemEl = document.querySelectorAll('.item')
const titleEl = document.querySelectorAll('h2')
const listItemEl = document.querySelectorAll('.item ul')

console.log(`Number of categories: ${itemEl.length}`)

titleEl.forEach((element, index) => {
	console.log(`Category: ${element.textContent}`)
	listItemEl.forEach((element, i) => {
		if (index === i) {
			console.log(`Elements: ${element.children.length}`)
		}
	})
})
