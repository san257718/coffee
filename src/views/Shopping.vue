<template>
  <div class="h-screen w-screen relative overflow-hidden">
      <img class=" object-cover opacity-80 -z-50 h-full w-full" src="../assets/background/購物車背景.png" alt=""/>
        <div class=" absolute top-0 h-full w-full overflow-y-auto">
            <header class="flex flex-wrap justify-around">
                <img class=" flex justify-center items-center" src="../assets/background/Logo 咖啡.png" alt=""/>
                    <div class="flex flex-wrap md:flex-wrap justify-center items-center px-16 text-black">
                        <router-link to="/" class="text-xl mx-16">首頁</router-link>
                        <router-link to="/About" class="text-xl mx-16">關於我們</router-link>
                        <router-link to="/Coffee_bag" class="text-xl mx-16">線上購物</router-link>
                    </div>
            </header>

            <div>
                <div class="text-3xl font-bold px-20 py-6">
                    <p>Sopping Cart</p>
                </div>
                <div class="text-3xl font-bold px-20">
                    <p class=" border-b pb-12">購物車</p>
                </div>
            </div>

            <div class="flex flex-wrap justify-evenly py-12">
                <div class="">
                     
                    <div>
                        <card_1 v-for="item in items" :key="item.id"  v-bind="item" />
                    </div>

                </div>
                    <div class="flex-row">
                        <div class="flex py-4 border-t">
                            <p class="flex justify-center items-center md:w-full">數量</p>
                                <div class="flex items-center px-6 pl-16">
                                    <div>-</div>
                                </div>
                                
                                <div class="flex px-4">
                                    <input type="text" value="1" size="1">
                                </div>

                                <div class="flex items-center px-2">
                                    <div>+</div>
                                </div>
                        </div>
                        
                        <div class="flex justify-between pt-4 border-t">
                            <p>小計</p>
                            <p>TWD</p>
                        </div>
                        
                    </div>
                   
            </div>
        
        
            <footer_1 />
        </div>
    </div>


</template>

<script>
import card_1 from '../components/card_1.vue'
import footer_1 from '../components/footer_1.vue'
import Coffee_items from '../assets/coffee.json'
export default {
    data() {
        return {
            items: Coffee_items
        }
    },
    components:{
        footer_1,
        card_1
    },
}
</script>

<style>

</style>