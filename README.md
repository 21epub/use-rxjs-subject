# @21epub/use-rxjs-subject

> Rxjs Subject with React Hooks

[![NPM](https://img.shields.io/npm/v/@21epub/use-rxjs-subject.svg)](https://www.npmjs.com/package/@21epub/use-rxjs-subject) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/21epub/use-rxjs-subject.svg?branch=master)](https://travis-ci.com/21epub/use-rxjs-subject) ![Codecov](https://img.shields.io/codecov/c/github/21epub/use-rxjs-subject)

## Install

```bash
npm install --save @21epub/use-rxjs-subject
```

## Usage

```tsx
import React, { Component } from 'react'

import useRxjsSubject from '@21epub/use-rxjs-subject'

const Subject$ = new BehaviorSubject(0)

const TestFn1: React.FC = () => {
  const [state] = useRxjsSubject(Subject$)
  return <div>{state}</div>
}

const TestFn2: React.FC = () => {
  const [state] = useRxjsSubject(Subject$)
  return <div>{state}</div>
}

const App: React.FC = () => {
  return (
    <>
      <TestFn1 />
      <TestFn2 />
    </>
  )
}
```

For Details: See Example

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run Example in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a bundle module build:

```sh
npm run build
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```

## License

MIT © [garry](https://github.com/garry)
