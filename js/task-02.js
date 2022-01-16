const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
]

const listEl = document.querySelector('#ingredients')

const makeListItems = ingredients.map(function (ingredient) {
	console.log(ingredient)

	const itemEl = document.createElement('li')
	itemEl.textContent = ingredient
	itemEl.classList = 'item'

	return itemEl
})

listEl.append(...makeListItems)

// const makeListItems = ingredients
// 	.map(function (ingredient) {
// 		console.log(ingredient)

// 		return `
// 			<li class='item'>
// 		<p>${ingredient}</p>
// 			</li>
// 			`
// 	})
// 	.join('')

// listEl.insertAdjacentHTML('beforeend', makeListItems)
