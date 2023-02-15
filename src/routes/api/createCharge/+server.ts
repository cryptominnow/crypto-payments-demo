import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { resources, type CreateCharge } from 'coinbase-commerce-node';
import { formatRes } from '$lib/utils';

export const GET: RequestHandler = async () => {

	const chargeData: CreateCharge = {
		name: 'Widget',
		description: 'Useless widget created by SvelteKit',
		local_price: {
			amount: '9.99',
			currency: 'USD'
		},
		pricing_type: 'fixed_price',
		// arbitrary metadata
		metadata: {
			user: '<user_id>'
		}
	};

	const [charge, err] = await formatRes(resources.Charge.create(chargeData));
	if (!charge) {
		console.error(err);
		throw error(500, 'Failed to create charge');
	}

	return new Response(JSON.stringify(charge));
};
