<script>
</script>

<svelte:head>
	<title>Welcome</title>
	<meta name="description" content="Create or join a game" />
</svelte:head>

<section>
	<h1>Welcome 👋</h1>

	<a href="/game/create">Create a new game</a>
	<h2>Or</h2>
	<a href="/game/join">Join an existing</a>
</section>

<style>
	section {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: var(--header-height);
	}
</style>
