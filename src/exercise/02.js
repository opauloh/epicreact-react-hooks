// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(
  key,
  initialValue,
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  const [value, setValue] = React.useState(() => {
    const localStorageValue = window.localStorage.getItem(key)
    if (localStorageValue) return deserialize(localStorageValue)

    return typeof initialValue === 'function' ? initialValue() : initialValue
  })

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) window.localStorage.removeItem(prevKeyRef.current)

    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(value))
  }, [key, serialize, value])

  return [value, setValue]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('loal', {
    firstName: initialName,
  })

  function handleChange(event) {
    setName({
      firstName: event.target.value,
    })
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name.firstName} onChange={handleChange} id="name" />
      </form>
      {name.firstName ? (
        <strong>Hello {name.firstName}</strong>
      ) : (
        'Please type your name'
      )}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
