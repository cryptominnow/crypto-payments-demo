<script lang="ts">
	let chargeLink: string;
	// import type {} from "coinbase-commerce-node"
</script>

<button
	on:click={async () => {
		const res = await fetch('/api/createCharge');
		const data = await res.json();

		console.log('charge data', JSON.stringify(data, null, 2));
		chargeLink = data.hosted_url;
	}}
>
	Buy Something with Crypto
</button>

{#if chargeLink}
	<a href={chargeLink}>Pay Now!</a>
{/if}
