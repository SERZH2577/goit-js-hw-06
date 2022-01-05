const itemEl = document.querySelectorAll('.item')
const titleEl = document.querySelectorAll('h2')
const listItemEl = document.querySelectorAll('.item ul')

console.log(`Number of categories: ${itemEl.length}`)

console.log(`Category: ${titleEl[0].textContent}`)
console.log(`Elements: ${listItemEl[0].children.length}`)

console.log(`Category: ${titleEl[1].textContent}`)
console.log(`Elements: ${listItemEl[1].children.length}`)

console.log(`Category: ${titleEl[2].textContent}`)
console.log(`Elements: ${listItemEl[2].children.length}`)
