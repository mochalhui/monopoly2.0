<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { createContext } from "./models";
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  setup() {
    createContext();
  }
});
</script>
