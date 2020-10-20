import React from 'react'
import { stateMutiply100$ } from './rxjs-event'
import useRxjsSubject from '../src/useRxjsSubject'

const BrotherOne = () => {
  const [state] = useRxjsSubject<number>(stateMutiply100$)

  return (
    <div>
      <h2>
        This is the brother state , which will multiply by 100 of the original
        state{' '}
      </h2>
      <div>MultiplyState : {state}</div>
    </div>
  )
}
export default BrotherOne
