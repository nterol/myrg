import fs from 'fs-extra';
import parseImports from 'parse-es6-imports';

async function getImportsInFile(file: {name: string; path: string}) {
  const f = await fs.readFile(file.path, 'utf-8');
  const allImports = parseImports(f.toString());

  console.log(file.name);
  console.log(allImports);

  return allImports;
}

export default getImportsInFile;
