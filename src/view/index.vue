<template>
   <div>
    home page

    {{ num }}

    <button @click="increase">Increase</button>
   </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import {computed} from 'vue'


const store = useStore()

const num = computed(()=> store.getters['Config/getNum'])

const increase = () => {
    store.dispatch('Config/increment')
}


</script>