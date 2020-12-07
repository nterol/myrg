import {QueryCache, ReactQueryCacheProvider} from 'react-query';

import Main from './components/main'
import './App.css';

const queryCache = new QueryCache()

function App() {


  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
    <h1>MYRG</h1>
    <p>A very basic react-app parser to generate graph of your app</p>
      <Main />
    </ReactQueryCacheProvider>


  );
}

export default App;
