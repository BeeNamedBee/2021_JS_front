<template>
  <div id="app">
    <div class="page-content">
      <component :is="layout">
        <router-view/>
      </component>
    </div>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
export default {
	name: 'App',
	components: {
		MainLayout, AuthLayout
	},
	computed: {
		layout() {
			return this.$route.meta?.layout || 'main-layout'
		}
	}
}
</script>

<style>
</style>
