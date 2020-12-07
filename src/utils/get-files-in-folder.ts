import chalk from 'chalk';
import fs from 'fs-extra';

const getFilesInFolder = async (dirName: string) => {
  try {
    const fileList = await fs.readdir(dirName)
    return fileList
  } catch (error) {
    console.log(chalk.bgRed(`Error readind ${dirName}`, error))
  }
}

export default getFilesInFolder
