import chalk from 'chalk';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors'

async function serve(ff: any) {
  const clientPath = __dirname.replace('src/app', 'client');

  const app = express();
  app.use(cors());
  app.options('*', cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  app.get('/api/myrg', (req, res) => {
    res.send(ff);
    console.log(chalk.green('myrg config sent !'))
  });

  app.use(express.static(path.join(clientPath, '/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${clientPath}/build/index.html`))
  })

  const port = 5000;

  app.listen(port, () => console.log(chalk.bgBlue(chalk.white(`🚀 Client on port ${port}`))));
}

export default serve
