import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: () => ({
            fetchedData: ''
        }),
        actions: {
            fetchTest({ commit }, data) {
                commit('setFetchedData', { data })
            }
        },
        mutations: {
            setFetchedData(state, { data }) {
                state.fetchedData = data
            }
        }
    })
}