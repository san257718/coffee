<template>
<router-link :to="`/Shopping/${id}`">
    <div class="mx-16 py-5">
        <img :src="`/image/${img1}`" alt="" />
        <p class="flex justify-center py-2">{{name}}</p>
        <p class="flex justify-center border-t-2 py-2 font-mono">{{unit}}g / {{price}}TWD</p>
      </div>
</router-link>
</template>

<script>
import Coffee_items from '../assets/coffee.json'
export default {
    props:[
        "id",
        "name",
        "unit",
        "price",
        "img1",
    ],
    data() {
        return {
            items: Coffee_items
        }
    },

}
</script>

<style>

</style>