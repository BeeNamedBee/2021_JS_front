<template>
	<li>
		<div class="todo-card">
			
			<div class="todo-card-title-wrapper">
				<p class="todo-card-title">
					{{ title }}
				</p>
			</div>
			<div class="todo-card-control">
				<input
					type="checkbox"
					class="todo-card-checkbox"
					:checked="isCompleted"
					@input="onCheckBoxInput"
				/>
				<span class="todo-card-checkbox-checkmark"></span>
				<button @click="deleteTodo" class="todo-card-delete-button">
					⨯
				</button>
			</div>
		</div>
	</li>
</template>

<script>
import { patchTodo, deleteTodo } from "@/netClient/todoService";
export default {
	props: [
		'id',
		'title',
		'isCompleted',
	],
	name: 'ToDoItem',
	methods: {
		async deleteTodo() {
			try {
				await deleteTodo(this.id)
				this.$emit('todo-deleted')
			}
			catch (error) {
				console.error({ error })
			}
		},
		async onCheckBoxInput() {
			try {
				await patchTodo({ id: this.id, isCompleted: !this.isCompleted })
				this.$emit('todo-checkbox')
			}
			catch (error) {
				console.error({ error })
			}
		},
	}
}
</script>
