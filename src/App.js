
import './App.css';

import { useQuery } from 'react-query'

function App() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.quotable.io/random').then(res =>
      res.json()
    )
  )

  if (isLoading) return (

    <div className="App">
      <header className="App-header">


      </header>
    </div>

  )

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="App">
      <header className="App-header">

        <div>
          {data.content}

        </div>
        <div>
          -{data.author}-
        </div>


      </header>
    </div>
  );
}

export default App;
