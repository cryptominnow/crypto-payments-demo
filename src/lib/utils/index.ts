export async function formatRes<T, E = unknown>(
	promise: Promise<T>
): Promise<readonly [T, null] | readonly [null, unknown]> {
	try {
		const data = await promise;
		return [data, null];
	} catch (err) {
		return [null, err as E];
	}
}