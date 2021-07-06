<template>
  <div id="container">
     <div
      v-for="(item, index) in areaAddressList"
      :key="index"
      :id="item.id"
      :style="{ gridArea: item.gridarea , background:item.background, backgroundImage : `url(${item.backgroundImg})`,backgroundSize: '100%'}"
    >
      {{ item.areaname }}
    </div>
    <div v-for="(item,index) in userList" :key="'user'+index" :id="item.id" :style="{gridArea: item.gridArea,backgroundImage: `url(${item.image})`,position:'absolute',width:'100px',height:'100px',zIndex:'100'}"></div>
  </div>
</template>
<script lang="ts">
import { createContext, useContext } from "./models";
import { defineComponent, watch } from "@vue/composition-api";

export default defineComponent({

  setup() {

    createContext();
     const { state } = useContext();
     return {
      ...state,
      areaAddressList: state.areaAddressList,
      userList: state.userList,
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
