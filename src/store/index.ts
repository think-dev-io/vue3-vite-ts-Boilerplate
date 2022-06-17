import { createStore } from 'vuex'
import { State } from '@/store/data/types.d'

export const store = createStore<State>({
  state() {
    return {
      count: 1,
    }
  },

  mutations: {
    add(state, amount) {
      state.count += amount
    },
  },
})
