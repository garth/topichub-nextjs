import React, { FunctionComponent } from 'react'
import { Layout } from '../src/components/Layout'

import '../src/styles.css'

const App: FunctionComponent<{ Component: FunctionComponent }> = ({ Component }) => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default App
