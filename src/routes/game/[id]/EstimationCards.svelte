<script lang="ts">
	import EstimationCard from './EstimationCard.svelte';

	export let selectedValue: string | undefined;
	export let onSelect: (value: string | undefined) => void;

	const values = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?', '☕️'];

	function onClick(value: string, isSelected: boolean) {
		onSelect(isSelected ? undefined : value);
	}
</script>

<section>
	<div class="choose-text">Choose your card 👇</div>

	<div class="container">
		{#each values as value (value)}
			<EstimationCard
				{value}
				isSelected={value === selectedValue}
				onClick={() => onClick(value, value === selectedValue)}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		align-items: center;

		.choose-text {
			font-size: 18px;
			font-weight: 500;
		}

		.container {
			display: flex;
			column-gap: 1rem;
		}
	}
</style>
