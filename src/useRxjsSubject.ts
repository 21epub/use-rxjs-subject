import { Draft } from 'immer'
import { useEffect } from 'react'
import { Observable } from 'rxjs'
import { useImmer } from 'use-immer'

const useRxjsSubject = <T>(
  subject$: Observable<T>,
  initialValue?: T
): [
  T | undefined,
  (f: (draft: Draft<T> | undefined) => void | T | undefined) => void
] => {
  const [state$, setState$] = useImmer<T | undefined>(initialValue)
  useEffect(() => {
    const subscription = subject$.subscribe((v: T) => {
      setState$(() => v)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [subject$])

  return [state$, setState$]
}

export default useRxjsSubject
