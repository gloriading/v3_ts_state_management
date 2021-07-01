<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>Current Counter Value: {{ store.state.counter }}</h4>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const store = inject("store");

    return { store };
  },
});
</script>
