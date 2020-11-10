// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {
  fetchPokemon,
  PokemonDataView,
  PokemonInfoFallback,
  PokemonForm,
} from '../pokemon'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function PokemonInfo({pokemonName = ''}) {
  const [{status, pokemon, error}, setState] = React.useState({
    status: 'idle',
    pokemon: null,
    error: null,
  })

  React.useEffect(() => {
    if (pokemonName === '') return

    setState({status: 'loading'})

    fetchPokemon(pokemonName)
      .then(pokemon => {
        setState({status: 'resolved', pokemon})
      })
      .catch(error => {
        setState({status: 'rejected', error})
      })
  }, [pokemonName])

  if (status === 'idle') return 'Submit a pokemon'

  if (status === 'rejected') throw new Error(error.message)
  // return (
  //   <div role="alert">
  //     There was an error:{' '}
  //     <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
  //   </div>
  // )

  if (status === 'loading') return <PokemonInfoFallback name={pokemonName} />

  return <PokemonDataView pokemon={pokemon} />
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          resetKeys={[pokemonName]}
          onReset={() => {
            setPokemonName('')
          }}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
