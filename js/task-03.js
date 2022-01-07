const images = [
	{
		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
]

const makeListItemMarkup = ({ url, alt }) => {
	return `
	<li class='item' style='list-style-type: none'>
<img src=${url} alt=${alt} width='480' style='display: block' />
	</li>
	`
}

const listEl = document.querySelector('.gallery')
const makeListItems = images.map(makeListItemMarkup).join('')

listEl.insertAdjacentHTML('beforeend', makeListItems)

// const listEl = document.querySelector('.gallery')
// for (let i = 0; i < images.length; i += 1) {
// 	const itemEl = document.createElement('li')
// 	itemEl.classList.add('item')
// 	const imgEl = document.createElement('img')
// 	imgEl.src = images[i].url
// 	imgEl.alt = images[i].alt
// 	imgEl.width = 480
// 	itemEl.appendChild(imgEl)
// 	listEl.append(itemEl)
// }
