import { BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'

export const state$ = new BehaviorSubject<number>(0)

export const stateMutiply100$ = state$.asObservable().pipe(map((v) => v * 100))

export const stateMutiply1000$ = state$
  .asObservable()
  .pipe(map((v) => v * 1000))
