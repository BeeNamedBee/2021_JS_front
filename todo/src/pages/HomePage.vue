<template>
	<div class="home-page">
		<section class="create-todo">
			<CreateTodo @todo-created="onTodoCreated"/>
		</section>
		<section class="todo-list">
			<h1 class="todo-header">Список карточек</h1>
			<ul class="todo-items">
				<ToDoItem v-for="todoItem in todoList"
					:key="todoItem.id"
					:title="todoItem.title"
					:id="todoItem.id"
					:isCompleted="todoItem.isCompleted"
					class="todo-item"
					@todo-deleted="onTodoDeleted"
					@todo-checkbox="onTodoCheckbox" />
			</ul>
		</section>
	</div>
</template>

<script>
import { fetchTodoList, patchTodo, deleteTodo } from '@/netClient/todoService'
import CreateTodo from '@/components/CreateTodo.vue'
import ToDoItem from '@/components/ToDoItem.vue'
export default {
	name: '',
	components: { CreateTodo, ToDoItem },
	data: () => ({
		todoList: [],
	}),
	async created() {
		this.fetchTodoList()
	},
	methods: {
		onTodoCreated(createdTodo) {
			console.warn({ createdTodo })
			this.fetchTodoList()
		},
		onTodoDeleted() {
			this.fetchTodoList()
		},
		onTodoCheckbox() {
			this.fetchTodoList()
		},
		async deleteTodo(id) {
			try {
				await deleteTodo(id)
				this.fetchTodoList()
			}
			catch (error) {
				console.error({ error })
			}
		},
		async fetchTodoList() {
			try {
				this.todoList = await fetchTodoList()
			}
			catch (error) {
				console.error({ error })
			}
		},
		async onCheckBoxInput(id, isCompleted) {
			try {
				await patchTodo({ id, isCompleted: !isCompleted })
				this.fetchTodoList()
			}
			catch (error) {
				console.error({ error })
			}
		},
	}
}
</script>
