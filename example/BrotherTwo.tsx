import React from 'react'
import { stateMutiply1000$ } from './rxjs-event'
import useRxjsSubject from '../src/useRxjsSubject'

const BrotherTwo = () => {
  const [state] = useRxjsSubject<number>(stateMutiply1000$)

  return (
    <div>
      <h2>
        This is the brotherTwo state , which will multiply by 1000 of the
        original state{' '}
      </h2>
      <div>Multiply1000State : {state}</div>
    </div>
  )
}
export default BrotherTwo
