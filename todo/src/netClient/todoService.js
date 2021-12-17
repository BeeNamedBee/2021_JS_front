import http from '@/netClient/config'

export async function createTodo({ title }) {
	try {
		const response = await http.post('/todos', { title })

		return response?.data ?? {}
	}
	catch (err) {
		console.error({ err })
		throw err
	}
}

export async function fetchTodoList() {
	try {
		const response = await http.get('/todos')
		return response.data?.todos || []
	}
	catch (err) {
		console.error({ err })
		throw err
	}
}

export async function deleteTodo( id ) {
	try {
		const response = await http.delete('/todos/' + id)
		return response?.data ?? {}
	}
	catch (err) {
		console.error({ err })
		throw err
	}
}

export async function patchTodo({ id, isCompleted }) {
	try {
		const response = await http.patch('/todos/' + id, { isCompleted })
		return response?.data ?? {}
	}
	catch (err) {
		console.error({ err })
		throw err
	}
}