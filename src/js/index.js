import { searchUser, getUserCard } from "./news_api_service";
import { singleUserMurkap, userMarkup } from "./buildMarkup";

const button = document.querySelector('.submitBtn')
const userContainer = document.querySelector('.user-container')

userContainer.addEventListener('click', onUserClick)
button.addEventListener('click', onSearchUsers)

function onUserClick(e) {
	const currentUser = e.target
	//витягуємо айді з юзера
	const currentUserId = Number(currentUser.dataset.id);
	getUserCard(currentUserId).then(user => {
		const userInfo = user.data.data
		return singleUserMurkap(userInfo)
	})

}

function onSearchUsers() {
	searchUser()
		.then(users => {
			return users.map(user => {
				userMarkup(user)
				return user
			})
		})
		.then(user => {
		// console.log(user);
		const userCard = document.querySelector('.user-card')
		// console.log(userCard);
	})
	.catch(error => {
		console.log(error);
	})
}