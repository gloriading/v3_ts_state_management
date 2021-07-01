import { reactive, readonly } from "vue";

const state = reactive({
  counter: 0,
  counterColor: "deeppink",
});

const methods = {
  increase(): void {
    state.counter++;
  },
  decrease(): void {
    state.counter--;
  },
  setColor(newColor: string): void {
    state.counterColor = newColor;
  },
};

const getters = {
  counterPlusTwo(): number {
    return state.counter + 2;
  },
};

export default {
  state: readonly(state),
  methods,
  getters,
};
