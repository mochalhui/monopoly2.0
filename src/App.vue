<template>
  <div id="container">
     <div
      v-for="(item, index) in areaAddressList"
      :key="index"
      :id="item.id"
      :style="{ gridArea: item.gridarea , background: item.background}"
    >
      {{ item.areaname }}
    </div>
  </div>
</template>
<script lang="ts">
import { createContext, useContext } from "./models";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({

  setup() {

    createContext();
     const { state } = useContext();
     return {
      areaAddressList: state.areaAddressList,
    };
  }
});
</script>

<style scoped>
#container{
  width:1200px;
  height: 900px;
  position: relative;
  top: 80px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(9,100px);
  grid-template-columns: repeat(12,100px);
  background: lightslategray;
  text-align: center;
  line-height: 100px;
}
</style>
