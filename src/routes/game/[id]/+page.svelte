<script lang="ts">
	import type { PageServerData } from './$types';
	import EstimationCards from './EstimationCards.svelte';
	import Table from './Table.svelte';

	export let data: PageServerData;

	let selectedValue: string | undefined = undefined;

	function onSelect(newValue: string | undefined) {
		selectedValue = newValue;
	}
</script>

<section>
	<div class="info">
		Welcome to the game: {data.game.title}
	</div>

	<div class="board">
		<Table />
	</div>

	<div class="estimation">
		<EstimationCards {selectedValue} {onSelect} />
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;

		.info {
			flex: 0;
		}

		.board {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.estimation {
			flex: 0;
		}
	}
</style>
