<script>
import { onMount } from 'svelte';

	import './app.css';

	let titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];
	let coins = [];
  let filteredCoins = [];
  let ref = null;

	const coinsData = async () => {
		const res = await fetch(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false',
		);

		const data = await res.json();
		coins = data;
    filteredCoins = data;
	};
	coinsData();

	const searchCoin = (text) => {
		filteredCoins = coins.filter((coin) =>
			coin.name.toLowerCase().includes(text.toLowerCase()) || coin.symbol.toLowerCase().includes(text.toLowerCase()),


		);
	};

  onMount(() => {
    ref.focus();
  });
</script>

<main class="grid place-items-center p-5">
	<div class="flex justify-between w-full py-3">
		<h1 class="place-self-start text-3xl font-semibold">Coin Market</h1>
		<input
			type="text"
			class="text-white bg-slate-800 rounded-3xl p-2  text-center drop-shadow-md"
			placeholder="Search a coin"
			on:keyup={({target: {value}}) => searchCoin(value)}
      bind:this={ref}
		/>
	</div>
	<table
		class="w-full text-sm text-left text-white  bg-slate-800 rounded-3xl drop-shadow-md "
	>
		<thead>
			<tr class="border-b-[1px] border-gray-500">
				{#each titles as title}
					<th class="px-5 py-1">{title}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each filteredCoins as coin, index}
				<tr class="hover:bg-slate-600">
					<td class="px-5 py-1 text-gray-500">{index + 1}</td>
					<td class="px-5 py-1 flex items-center gap-x-2">
						<img src={coin.image} alt={coin.name} style="width: 2rem;" />
						<span>
							{coin.name}
						</span>

						<span class="text-gray-500 uppercase font-bold">
							{coin.symbol}
						</span>
					</td>
					<td class="px-5 py-1">${coin.current_price.toLocaleString()}</td>
					<td
						class={coin.price_change_percentage_24h > 0
							? 'text-green-500 px-5 py-1'
							: 'text-red-500 px-5 py-1'}
						>{coin.price_change_percentage_24h} %</td
					>
					<td class="px-5 py-1">${coin.total_volume.toLocaleString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<style>
</style>
