import chalk from 'chalk';
import fs from 'fs-extra';

import myrgConfigPath from '../constants/myrg-config';

async function initConfig() {
  let myrgConfig;

  if (fs.existsSync(myrgConfigPath)) {
    myrgConfig = await fs.readJSON(myrgConfigPath);

    return myrgConfig;
  }

  myrgConfig = {nodes: [], edges: []}

  fs.writeJSON(myrgConfigPath, myrgConfig, err => {
    if (err) return console.log(chalk.bgRed('Could not init myrg'), err)
    return console.log(chalk.green('👍 myrg is setting up...'));
  })
}

export default initConfig;
