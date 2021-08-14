import axios from 'axios'
import Cookies from 'js-cookie'

export const loginRequest = (username, password, success, failure) => {
  	return axios.post(process.env.NEXT_PUBLIC_LOGIN_API_URL, { username, password }).then(success).catch(failure)
}

export const equipmentRequest = (success, failure) => {
  	return axios({ 
  		method: 'get',
  		url: `${process.env.NEXT_PUBLIC_API_URL}/equipment`,
  		headers: { Authorization: `${Cookies.get('AuthToken')}`},
  		withCredentials: true
  	}).then(success).catch(failure)
}
