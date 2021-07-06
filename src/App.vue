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
    <table id="userInfo">

      <tr>
        <td>👦👧</td>
        <td>{{user1Info.userName}}</td>
        <td>{{user2Info.userName}}</td>
      </tr>
      <tr>
        <td>💰</td>
        <td>{{user1Info.moneySum}}元</td>
        <td>{{user2Info.moneySum}}元</td>
      </tr>
      <tr>
        <td>银行🏦</td>
        <td>{{user1Info.eachCoin}}元</td>
        <td>{{user2Info.eachCoin}}元</td>
      </tr>
      <tr>
        <td>税收</td>
        <td>待补充</td>
        <td>待补充</td>
      </tr>

</table>
  </div>
</template>
<script lang="ts">
import { createContext, useContext } from "./models";
import { defineComponent, watch } from "@vue/composition-api";

export default defineComponent({

  setup() {

    createContext();
     const { state } = useContext();
     console.log(state.user1)
     return {
      ...state,
      areaAddressList: state.areaAddressList,
      userList: state.userList,
      user1Info: state.user1,
      user2Info: state.user2
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
#userInfo{
  position: relative;
  width: 300px;
  height: 600px;
  list-style:none;

}

</style>
