import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { Webhook } from 'coinbase-commerce-node';
import { COINBASE_COMMERCE_SHARED_SECRET } from '$env/static/private';

export const GET: RequestHandler = async (req) => {
	const signature = req.request.headers.get('x-cc-webhook-signature');
	if (!signature) throw error(401, 'Not authorized');

	const rawBody = await req.request.text();

	try {
		const event = Webhook.verifyEventBody(rawBody, signature, COINBASE_COMMERCE_SHARED_SECRET);

		if (event.type === 'charge:confirmed') {
			console.log('Payment Received');
		}
        
		return new Response(`success ${event.id}`);
	} catch (err) {
		console.error(err);
		throw error(401, 'Not authorized');
	}
};
