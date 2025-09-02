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
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setList(state, value) {
      state.list = value
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },

    // example call API
    async callAPI({ commit }) {
      //
      const body = {
        field1: "123",
      };
      //   apiClient.post('/api/call-api', body)

       try {
        // Giả sử file data nằm ở public/data/product.json
      const res = await apiClient.get("/data/product.json");
      console.log('res:: ', res.data)
        commit("setList", res.data);
      } catch (err) {
        // commit("SET_ERROR", err.message || "Lỗi khi load users");
      }

      return true;
    },
  },
};
