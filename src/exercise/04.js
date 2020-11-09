// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {useLocalStorageState} from '../utils'

function Board({onClick, squares}) {
  function renderSquare(i) {
    return (
      <button className="square" onClick={() => onClick(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game() {
  const [squares, setSquares] = useLocalStorageState('squares', () =>
    Array(9).fill(null),
  )

  const [currentSquare, setCurrentSquare] = React.useState(() => squares)

  const [moves, setMoves] = useLocalStorageState('history', () => [squares])

  React.useEffect(() => {
    setCurrentSquare(squares)
  }, [squares])

  const nextValue = calculateNextValue(currentSquare)
  const winner = calculateWinner(currentSquare)
  const status = calculateStatus(winner, currentSquare, nextValue)

  function restart() {
    setSquares(Array(9).fill(null))
    setMoves([Array(9).fill(null)])
  }

  function selectSquare(square) {
    if (currentSquare[square] || winner) return

    let squaresCopy = [...currentSquare]
    squaresCopy[square] = nextValue

    setSquares(squaresCopy)

    const movesArr = moves.reduce(
      (prev, curr) => {
        if (prev.found) return prev

        if (JSON.stringify(curr) === JSON.stringify(currentSquare))
          prev.found = true

        prev.moves.push(curr)

        return prev
      },
      {
        found: false,
        moves: [],
      },
    )

    setMoves([...movesArr.moves].concat([squaresCopy]))
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={selectSquare} squares={currentSquare} />
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {moves.map((move, idx) => {
            return (
              <li key={idx}>
                <button
                  disabled={
                    JSON.stringify(move) === JSON.stringify(currentSquare)
                  }
                  onClick={() => setCurrentSquare(move)}
                >
                  {idx === 0 ? 'Go to game start' : `Go to move #${idx}`}
                  {JSON.stringify(move) === JSON.stringify(currentSquare)
                    ? ' (current)'
                    : ''}
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  const xSquaresCount = squares.filter(r => r === 'X').length
  const oSquaresCount = squares.filter(r => r === 'O').length
  return oSquaresCount === xSquaresCount ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  return <Game />
}

export default App
