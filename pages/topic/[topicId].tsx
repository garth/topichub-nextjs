import React, { FunctionComponent } from 'react'
import { useStore } from '../../src/store'
import { useRouter } from 'next/router'

const isClientSide = typeof window !== 'undefined'

const Topic: FunctionComponent = () => {
  const router = useRouter()
  const state = useStore()
  const topicId: string = router.query.topicId as string
  const topic = state.topics[topicId]

  if (!topic) {
    if (isClientSide) {
      router.replace('/')
    }
    return null
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Topic</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <form>
            <div>
              <div>
                <div className="mt-6 sm:mt-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                      Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <input
                          id="name"
                          className="flex-1 form-input block w-full rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          value={topic.name}
                          onChange={event => state.updateTopic({ ...topic, name: event.currentTarget.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                      Content
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                        <textarea
                          id="content"
                          rows={3}
                          className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          value={topic.content}
                          onChange={event =>
                            state.updateTopic({ ...topic, content: event.currentTarget.value })
                          }></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Topic
