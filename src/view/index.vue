<template>
  <div>
    home page

    {{ num }}

    <button @click="increase">Increase</button>


    <div class="card">
        <div v-for="item in list" :key="item.id">
            <div>
                {{ item.title }}
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();

const num = computed(() => store.getters["Config/getNum"]);

const list = computed(() => store.getters["Config/getList"]);


const increase = () => {
  store.dispatch("Config/increment");
};

// init
const init = () => {
  store.dispatch("Config/callAPI");
};

onMounted(() => {
  init();
});
</script>
