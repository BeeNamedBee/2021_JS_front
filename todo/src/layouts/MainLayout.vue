<template>
	<div class="main-layout">
		<NavBar/>
		<div class="page-container">
			<router-view/>
		</div>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
    name: 'MainLayout',
    components: { NavBar },
};
</script>

<style scoped>
.main-layout {
	width: 800px;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}

.main-layout > * {
	max-width: 100%;
}
</style>
