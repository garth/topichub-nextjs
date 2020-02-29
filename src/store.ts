import { create } from 'zustand'
import id from 'nanoid'

export interface Topic {
  id: string
  name: string
  content: string
}

export interface State {
  topics: {
    [id: string]: Topic
  }

  topicList: () => Topic[]
  topicCount: () => number

  createTopic: () => Topic
  updateTopic: (topic: Topic) => void
}

export const [useStore, store] = create<State>((set, get) => ({
  topics: {},

  topicList: () => Object.values(get().topics).sort((a, b) => a.name.localeCompare(b.name)),
  topicCount: () => Object.keys(get().topics).length,

  createTopic: () => {
    const topic: Topic = {
      id: id(),
      name: 'New Topic',
      content: 'Add some details here',
    }
    set(state => ({ topics: { ...state.topics, [topic.id]: topic } }))
    return topic
  },

  updateTopic: (topic: Topic) => set(state => ({ topics: { ...state.topics, [topic.id]: topic } })),
}))
