import * as React from 'react'
import { render } from '@testing-library/react'
import { BehaviorSubject } from 'rxjs'
import useRxjsSubject from './useRxjsSubject'
import { act } from 'react-dom/test-utils'

const Subject$ = new BehaviorSubject(0)

const TestFn: React.FC = () => {
  const [state] = useRxjsSubject(Subject$)
  return <div>{state}</div>
}

describe('Test useRxjsSubject Hooks', () => {
  test('Two example should Be Sync when subject change ', async () => {
    const Test1 = render(<TestFn />)
    const Test2 = render(<TestFn />)
    expect(Test1.container.innerHTML).toMatch(Test2.container.innerHTML)
    await act(async () => {
      Subject$.next(2)

      // await waitForElement(() => getByText(Test1.container, '2'));

      // await waitForElement(() => getByText(Test2.container, '2'))
    })
    expect(Test1.container.innerHTML).toMatch(/2/)
    expect(Test2.container.innerHTML).toMatch(/2/)
  })
})
