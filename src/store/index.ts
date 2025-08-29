import { createStore } from "vuex"
import { configStore } from "./configStore"

const store = createStore({
  modules: {
    Config: configStore,
  }
})

export default store
