import * as React from 'react'
import { state$ } from './rxjs-event'
import useRxjsSubject from '../src/useRxjsSubject'
import BrotherOne from './BrotherOne'
import BrotherTwo from './BrotherTwo'

interface Props {
  name: string
}

export const App = (props: Props) => {
  const [state] = useRxjsSubject<number>(state$)

  const { name } = props

  const increment = () => {
    state$.next(state + 1)
  }
  const decrement = () => {
    state$.next(state - 1)
  }

  return (
    <>
      <h1>
        Hello {name} , This is a Test , And you'll see different components sync
        the same data source from useRxjsSubject Main State: {state}
      </h1>
      <BrotherOne />
      <BrotherTwo />
      <div>
        <button onClick={increment}>increment</button>
      </div>
      <br />

      <div>
        <button onClick={decrement}>decrement</button>
      </div>
    </>
  )
}

export default App
