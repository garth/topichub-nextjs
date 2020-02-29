import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { useStore } from '../src/store'
import { useRouter } from 'next/router'

const Topics: FunctionComponent = () => {
  const router = useRouter()
  const state = useStore()

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Topics</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              {state.topicList().map(topic => (
                <li key={topic.id}>
                  <Link href="/topic/[topicId]" as={`/topic/${topic.id}`}>
                    <a className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
                      <div className="px-4 py-4 flex items-center sm:px-6">
                        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                          <div>
                            <div className="text-sm leading-5 font-medium text-indigo-600 truncate">{topic.name}</div>
                          </div>
                          <div className="mt-4 flex-shrink-0 sm:mt-0">
                            <div className="flex overflow-hidden">
                              <img
                                className="inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                              <img
                                className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                              <img
                                className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt=""
                              />
                              <img
                                className="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ml-5 flex-shrink-0">
                          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            onClick={() => router.push('/topic/[topicId]', `/topic/${state.createTopic().id}`)}>
            Add New Topic
          </button>
        </div>
      </div>
    </>
  )
}

export default Topics
