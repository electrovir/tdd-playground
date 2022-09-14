import {dirname, join} from 'path';

export const repoRooDir = dirname(dirname(__dirname));

export const challengesDir = join(repoRooDir, 'src', 'challenges');

const baseChallengeDir = join(challengesDir, 'base-challenge');
export const baseChallengeFiles = {
    ts: join(baseChallengeDir, 'base-challenge.ts'),
    test: join(baseChallengeDir, 'base-challenge.test.ts'),
};
