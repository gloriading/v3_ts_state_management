<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h1 class="counter" :style="{ color: store.state.counterColor }">
    {{ store.state.counter }}
  </h1>
  <p>{{ store.state.counter }} + 2 = {{ store.getters.counterPlusTwo() }}</p>
  <div class="actions">
    <button @click="store.methods.decrease">-</button>
    <button @click="store.methods.increase">+</button>
  </div>
  <div class="changeColor">
    <input type="text" v-model="counterColor" placeholder="Enter color code" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from "vue";

interface State {
  counter: number;
  counterColor: string;
}
interface Metohds {
  increase(): void;
  decrease(): void;
  setColor(newColor: string): void;
}
interface Getters {
  counterPlusTwo(): number;
}
interface Store {
  state: State;
  methods: Metohds;
  getters: Getters;
}
export default defineComponent({
  name: "Home",
  setup() {
    const store = inject("store") as Store;
    const counterColor = computed({
      get() {
        return store.state.counterColor;
      },
      set(val: string) {
        store.methods.setColor(val);
      },
    });

    return { store, counterColor };
  },
});
</script>

<style scoped>
.counter {
  font-size: 72px;
}
button {
  font-size: 40px;
  width: 50px;
  cursor: pointer;
  margin-right: 10px;
}
.changeColor {
  margin-top: 2rem;
}
input[type="text"] {
  font-size: 1rem;
}
</style>
