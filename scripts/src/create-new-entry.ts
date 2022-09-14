import {camelCaseToKebabCase, collapseWhiteSpace, kebabCaseToCamelCase} from 'augment-vir';
import {existsSync} from 'fs';
import {cp, mkdir, readFile, writeFile} from 'fs/promises';
import {join} from 'path';
import {baseChallengeFiles, challengesDir} from './file-paths';
import {askQuestion} from './prompt';

export {};

function sanitizeNewEntryName(name: string): string {
    return camelCaseToKebabCase(collapseWhiteSpace(name).replace(/\s/g, '-'));
}

function todayInKebab(): string {
    const today = new Date();
    return [
        today.getUTCFullYear(),
        String(today.getUTCMonth() + 1).padStart(2, '0'),
        String(today.getUTCDate()).padStart(2, '0'),
    ].join('-');
}

function baseToNewEntryFileContents(
    contents: string,
    newEntryFileName: string,
    newEntryKebabName: string,
): string {
    const newEntryCamelName = kebabCaseToCamelCase(newEntryKebabName);

    return contents
        .replace(/\.\/base-challenge/g, `./${newEntryFileName}`)
        .replace(/base-challenge/g, newEntryKebabName)
        .replace(/baseChallenge/g, newEntryCamelName);
}

async function createNewEntry() {
    const inputName = await askQuestion(`What should the new entry be called?\n`);

    const newEntryKebabName = sanitizeNewEntryName(inputName);
    const newEntryFileName = [
        todayInKebab(),
        newEntryKebabName,
    ].join('-');
    const newEntryDir = join(challengesDir, newEntryFileName);
    const newEntryTsFilePath = join(newEntryDir, `${newEntryFileName}.ts`);
    const newEntryTestFilePath = join(newEntryDir, `${newEntryFileName}.test.ts`);

    const newEntryTsFileContents = baseToNewEntryFileContents(
        (await readFile(baseChallengeFiles.ts)).toString(),
        newEntryFileName,
        newEntryKebabName,
    );
    const newEntryTestFileContents = baseToNewEntryFileContents(
        (await readFile(baseChallengeFiles.test)).toString(),
        newEntryFileName,
        newEntryKebabName,
    );

    if (existsSync(newEntryTsFilePath) && existsSync(newEntryTestFilePath)) {
        throw new Error(`This entry already exists!`);
    }

    await mkdir(newEntryDir, {recursive: true});
    await cp(baseChallengeFiles.ts, newEntryTsFilePath);
    await cp(baseChallengeFiles.test, newEntryTestFilePath);

    await writeFile(newEntryTsFilePath, newEntryTsFileContents);
    await writeFile(newEntryTestFilePath, newEntryTestFileContents);

    return true;
}

createNewEntry();
