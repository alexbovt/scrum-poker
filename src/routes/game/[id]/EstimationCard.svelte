<script lang="ts">
	export let value: string;
	export let isSelected: boolean;
	export let onClick: () => void;
</script>

<div class="card" class:card--selected={isSelected} on:click={onClick}>
	{value}
</div>

<style lang="scss">
	.card {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid var(--color-theme-1);
		background-color: white;
		width: 3rem;
		height: 5rem;
		border-radius: 0.8rem;
		cursor: pointer;
		color: var(--color-theme-1);
		font-weight: 700;
		font-size: 20px;
		margin-top: 0;
		transition: margin-top 0.3s;

		&--selected {
			background-color: var(--color-theme-1);
			color: white;
			margin-top: -0.5rem;
		}

		&:hover:not(&--selected) {
			background-color: var(--color-theme-1-light);
			margin-top: -0.3rem;
		}
	}
</style>
