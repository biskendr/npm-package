import React from 'react'

import { ButtonPrimary ,ButtonDefault ,ButtonDotted } from 'pat-btn-ui'
import 'pat-btn-ui/dist/index.css'

const App = () => {
  return (<>    
    <ButtonPrimary text="Example Primary Button 😄" />
    <ButtonDefault text="Example Default Button 😄" />
    <ButtonDotted text="Example Dotted Button 😄" />
  </>)
}

export default App