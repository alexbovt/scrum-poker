<script>
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<a href="/">
		<img src={logo} alt="Socker" />
	</a>
</header>

<style>
	header {
		display: flex;
		flex: 0;
		justify-content: space-between;
		height: var(--header-height);
		padding: 2rem;
	}

	img {
		width: 3em;
		height: 3em;
		display: block;
	}
</style>
