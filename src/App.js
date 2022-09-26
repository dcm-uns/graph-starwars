import './App.css';

// 3. importar lo necesario para la consulta
import { useQuery, gql } from "@apollo/client";

// 4. Consulta graphQL
const consulta = gql`
  {
    allFilms {
      films {
        title
        director
      }
    }
  }
`;


function App() {

  // 5. Realizar la consulta, recuperar data,loading y error.
  const { data, loading, error } = useQuery(consulta);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  

  return (
    <div className="App">
      <header className="App-header">
        <ul>
        {data.allFilms.films.map( (film) => (
          <li key={film.title}>{film.title}</li>
        ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
