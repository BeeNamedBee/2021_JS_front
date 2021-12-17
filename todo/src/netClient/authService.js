import http from '@/netClient/config'

//mb ?? login name email password
export async function doRegister(email, login, password, name) {
	try {
		const response = await http.post('/auth/registration', {
			email,
			login,
			password,
			name
		})
		return response.data
	}
	catch (err) {
		console.error({ err })
		throw err
	}
}

export async function doLogin(login, password) {
	try {
		const response = await http.post('/auth/login', {
			login,
			password,
		})
		console.log('New token: ' + response.data.token)
		const accessToken = response.data.token
		localStorage.accessToken = accessToken
		return accessToken
	}
	catch (err) {
		console.error({ err })
		throw err
	}
}

export async function doLogout() {
	try {
		const response = await http.post('/users/logout',
			{},
		)
		localStorage.removeItem("accessToken")
		return response.data
	}
	catch (err) {
		console.error({ err })
		throw err
	}
}
