<template>
		<div class="nav">
			<div class="links">
				<div class="nav-link">
					<router-link class="nav-router-link" to="/">Главная страница</router-link>
					<router-link class="nav-router-link" to="/info">Информация</router-link>
				</div>
				<a @click="onLogoutClicked" class="logout">Выйти</a>
			</div>
		</div>
</template>

<script>
import { doLogout } from '@/netClient/authService';
export default {
	name: 'NavBar',
	methods: {
		async onLogoutClicked() {
			try {
				await doLogout()
				this.$router.push('/login')
			}
			catch (error) {
				console.error({ error })
			}
		}
	}
}
</script>

<style>
</style>
