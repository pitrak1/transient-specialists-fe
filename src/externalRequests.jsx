import axios from 'axios'
import Cookies from 'js-cookie'

export const loginRequest = (username, password, success, failure) => {
  	return axios.post(process.env.NEXT_PUBLIC_LOGIN_API_URL, { username, password }).then(success).catch(failure)
}

// Example of authorized request
// export const gamesRequest = (success, failure) => {
//   	return axios({ 
//   		method: 'get',
//   		url: process.env.NEXT_PUBLIC_GAMES_API_URL,
//   		headers: { Authorization: `${Cookies.get('AuthToken')}`},
//   		withCredentials: true
//   	}).then(success).catch(failure)
// }
