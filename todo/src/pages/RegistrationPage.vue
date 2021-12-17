<template>
    <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
        <div class="form-field">
<!--
            <label for="email">Почта</label>
-->
            <input class="form-input" v-model="email" id="email" type="email" placeholder="E-mail" required/>
        </div>
        <div class="form-field">
<!--
            <label for="login">Логин</label>
-->
            <input class="form-input" v-model="login" id="login" type="text" placeholder="Логин" required/>
        </div>
        <div class="form-field">
<!--
            <label for="name">Имя</label>
-->
            <input class="form-input" v-model="name" id="name" type="text" placeholder="Имя" required/>
        </div>
        <div class="form-field">
<!--
            <label for="password">Пароль</label>
-->
            <input class="form-input" v-model="password" id="password" type="password" placeholder="Пароль" required/>
        </div>
        <button class="submit-btn" type="submit">Регистрация</button>
        <div class="action-link">
            <span>Уже есть аккаунт? </span>
            <a @click="redirect" class="link-btn">Войти</a>
        </div>
    </form>
</template>

<script>
import { doRegister } from '@/netClient/authService'
export default {
	name: 'RegistrationPage',
	data: () => ({
		email: '',
		login: '',
		password: '',
		name: ''
	}),
	methods: {
		async onFormSubmit() {
			try {
				const data = await doRegister(
				this.login.trim(),
				this.password.trim(),
				this.email.trim(),
				this.name.trim()
				)
			console.warn({ data })
			}
			catch (error) {
				console.error({ error })
				throw error
			}
			this.$router.push('/login')
		},
		redirect() {
			this.$router.push('/login')
		}
	}
}
</script>
