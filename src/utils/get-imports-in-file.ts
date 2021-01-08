import fs from 'fs-extra';
import path from 'path';
import parseImports from 'parse-es6-imports';

type ImportObject = {
 defaultImport: string;
 namedImports: Array<{name:string, value:string}>
 fromModule: string;
 starImport: string | null
}

async function getImportsInFile(file: { name: string; path: string }) {
  const f = await fs.readFile(file.path, 'utf-8');
  const absolutePath = path.resolve(file.path);
  const allImports = parseImports(f.toString()).map((importObject: ImportObject) => {
    console.log(importObject.fromModule)
    if (importObject.fromModule.startsWith("./") || importObject.fromModule.startsWith("../")) { // if "../" is removed path.resolve only concats the two strings
      const absoluteFromModule = path.resolve(absolutePath, `../${importObject.fromModule}`);
      return {...importObject, fromModule: absoluteFromModule, isPackage: false}
    }
    return {...importObject, isPackage: true}
  });
  return {
    name: file.name,
    path: absolutePath,
    imports: allImports,
  };
}

export default getImportsInFile;
