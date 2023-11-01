import { db } from '$lib/db.server';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {
	const gameId = params.id;
	const userId = cookies.get('userId');

	const game = await db.game.findUnique({ where: { id: gameId } });

	if (!game) {
		throw redirect(300, `/`);
	}

	if (!userId) {
		//TODO: HANDLE
		throw redirect(300, `/game/join/${game.id}`);
	}

	const user = await db.user.findUnique({ where: { id: userId } });

	if (!user) {
		//TODO: HANDLE
		throw redirect(300, `/game/join/${game.id}`);
	}

	if (user.id !== game.authorId) {
		// await db.game.update({ where: { id: game.id } });
	}

	return { user, game };
}) satisfies PageServerLoad;
