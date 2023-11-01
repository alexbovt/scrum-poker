<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let author: string;
	let title: string;
	let isLoading: boolean;

	const handleFormSubmition: SubmitFunction = () => {
		isLoading = true;
		return async ({ update }) => {
			await update();
			isLoading = false;
		};
	};
</script>

<section>
	<form method="POST" action="?/create" on:submit|preventDefault use:enhance={handleFormSubmition}>
		<label for="author">Your name</label>
		<input type="text" name="author" bind:value={author} disabled={isLoading} />

		<label for="title">Game's name</label>
		<input type="text" name="title" bind:value={title} disabled={isLoading} />

		<button type="submit" disabled={!(title && author) || isLoading}>Create</button>
	</form>
</section>

<style lang="scss">
	form {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: var(--header-height);
		row-gap: 1rem;
	}
</style>
