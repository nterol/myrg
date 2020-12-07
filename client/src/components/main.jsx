import axios from 'axios';
import { useQuery } from 'react-query';

function Main() {
  const {isLoading, data, error} = useQuery('api/myrg-config', async () => {
    try {
      const data = await axios.get("http://localhost:5000/api/myrg", {
      "Access-Control-Allow-Origin": "*"
    });
      return data;
    } catch(err) {
      return err;
    }
  });

  const getMain = () => {
    if (isLoading) return <p>Loading</p>
    if (error) return <p>Error</p>
    if (data) return <p> Data !</p>
  }

  return (
    <section>
      {getMain()}
    </section>
  )
}

export default Main;
