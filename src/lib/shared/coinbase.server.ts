import coinbase from 'coinbase-commerce-node';
import { COINBASE_COMMERCE_API_KEY } from '$env/static/private';

export const coinbaseClient = coinbase.Client.init(COINBASE_COMMERCE_API_KEY);