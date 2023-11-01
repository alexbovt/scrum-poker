<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;

		main {
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 1rem;
			width: 100%;
			max-width: 64rem;
			margin: 0 auto;
			box-sizing: border-box;
		}
	}
</style>
