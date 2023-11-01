import { db } from '$lib/db.server';
import { redirect } from '@sveltejs/kit';
import type { Actions, RequestEvent } from './$types';

export const actions = {
	create: async ({ request, cookies }: RequestEvent) => {
		const formData = await request.formData();
		const title = formData.get('title')!.toString();
		const author = formData.get('author')!.toString();

		// await new Promise((r) => setTimeout(r, 2_000));dfxc 

		const game = await db.game.create({
			data: {
				title,
				author: {
					create: { name: author }
				}
			}
		});
		cookies.set('userId', game.authorId);

		throw redirect(300, `/game/${game.id}`);
	}
} satisfies Actions;
