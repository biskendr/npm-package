# pat-btn-ui

> Made with create-react-library for patika/react task

[![NPM](https://img.shields.io/npm/v/pat-btn-ui.svg)](https://www.npmjs.com/package/pat-btn-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save pat-btn-ui
```

## Usage

```jsx
import React from 'react'

import { ButtonPrimary ,ButtonDefault ,ButtonDotted } from 'bis-btn-ui'
import 'bis-btn-ui/dist/index.css'

const App = () => {
  return (<>    
    <ButtonPrimary text="Example Primary Button 😄" />

    <ButtonDefault text="Example Default Button 😄" />
    
    <ButtonDotted text="Example Dotted Button 😄" />
  </>)
}

export default App
```

## License

MIT © [biskendr](https://github.com/biskendr)
