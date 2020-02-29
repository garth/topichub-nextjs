import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { useStore } from '../src/store'

const Home: FunctionComponent = () => {
  const state = useStore()

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <p>
            There are {state.topicCount()}{' '}
            <Link href="/topics">
              <a className="text-blue-500">topics</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
