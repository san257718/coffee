<template>

<div class="flex flex-wrap justify-evenly py-12">
    <div class="">
      <div><img :src="`/image/${img}`" alt=""></div>
      <div class="flex justify-center py-5">
        {{name}}
      </div>
    </div>
    <div class="flex-row">
      <div class="flex py-8 my-4 border-t">
        <p class="flex justify-center items-center md:w-full">數量</p>
        <div class="flex items-center px-6 pl-16 cursor-pointer">
          <div @click="$emit('subone',id)">-</div>
        </div>

        <div class="flex px-4">
          <input type="text" size="1" v-model="count" />
        </div>

        <div class="flex items-center px-2 cursor-pointer">
          <div @click="$emit('addone',id)">+</div>
        </div>
      </div>

      <div class="flex justify-between pt-4 border-t">
        <p>小計</p>
        <p>{{count * price}}</p>
        <p>TWD</p>
      </div>
    </div>
  </div>


</template>

<script>
export default {
    props:[
        "id",
        "name",
        "price",
        "count",
        "img"
    ],
    data() {
        return {
            
        }
    },
};
</script>

<style>
</style>