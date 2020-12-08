import fs from 'fs-extra';

import avoidFolders from '../constants/avoid-folders'
import checkParsability from './check-parsability';

async function getFiles(path = './'): Promise<({name: string; path: string; lastChecked: number} | undefined)[]> {
  const entries = await fs.readdir(path, { withFileTypes: true });

  const files = entries.filter(file => !file.isDirectory()).map(file => {
    if (checkParsability(file.name))
      return {
        name: file.name, path: `${path}${file.name}`, lastChecked: Date.now(),
      }
    return undefined;
  }).filter(a => a);

  const folders = entries.filter(folder => folder.isDirectory());

  for (const folder of folders) {
    if (!avoidFolders.includes(folder.name))
    // asyncResults.push(getFiles(`${path}${folder.name}/`))
    // eslint-disable-next-line no-await-in-loop
      files.push(...await getFiles(`${path}${folder.name}/`))
  }

  return files;
}

export default getFiles;
