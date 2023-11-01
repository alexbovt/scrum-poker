import type { PageLoad } from './$types';

export const load = (async ({params}) => {
    const id = params.id;

    console.log('[TEST]', {id})

    return {
        id
    };
}) satisfies PageLoad;