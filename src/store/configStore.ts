import { apiClient } from "@/services/http";

export const configStore = {
  namespaced: true,
  state: () => ({
    count: 1,
    list: [], // example list
  }),
  getters: {
    getList(state) {
      return state.list;
    },
    getNum(state) {
        return state.count
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }) {
        commit("increment");
    },

    // example call API
    async callAPI({ commit }) {
      //
      const body = {
        field1: '123'
      }
    //   apiClient.post('/api/call-api', body)
    },
  },
};
