<template>
	<div class="create-todo-div">
		<div class="create-todo-input-div">
			<input v-model="todoTitle" class="create-todo-input" type="text" placeholder="Здесь пока что пусто..." />
		</div>
		<div class="create-todo-button-div">
			<button @click="onCreateTodoClicked" class="create-todo-button" type="submit">
				Добавить новую карточку
			</button>
		</div>
	</div>
</template>

<script>
import { createTodo } from '@/netClient/todoService'
export default {
	name: 'CreateTodo',
	data: () => ({
		todoTitle: '',
	}),
	methods: {
		async onCreateTodoClicked(){
			try {
				const newTodo = await createTodo({ title: this.todoTitle })
				if(newTodo)
					this.todoTitle = ''
				this.$emit('todo-created', newTodo)
			} catch (error) {
				console.error({ error })
			}
		}
	} 
}
</script>

<style>
</style>
