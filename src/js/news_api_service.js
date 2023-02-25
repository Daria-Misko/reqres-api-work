import axios from "axios";
const baseUrl = 'https://reqres.in';

function searchUser() {
	return axios.get(`${baseUrl}/api/users?per_page=12`)
		.then(res => {
			if (res.status !== 200) {
				throw new Error(res.status)
			}
			return res.data.data
		})
}

function getUserCard(id) {
	return axios.get(`${baseUrl}/api/users/${id}`)
		.then(res => {
			if (res.status !== 200) {
				throw new Error(res.status)
			}
			return res
		})
}

export { searchUser, getUserCard }