<template>
  <div id="app">
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

            <div class="flex flex-wrap justify-evenly pt-20">
              <div>
                <img :src="`/image/${currentItem.img}`">
              </div>

              <div class="flex-wrap ">
                <p class="text-4xl font-bold pb-14 pt-8">曼特寧 蘇門答臘</p>
                <p class="text-xl font-semibold pb-5">烘焙度：中深烘焙</p>
                <p class="text-xl font-semibold pb-5">產地</p>
                <p class="text-xl font-semibold pb-5">處理法: 濕剝式處理</p>
                <p class="text-xl font-semibold pb-5">風味: 焦糖,堅果,奶油,尾韻蜂蜜焦糖</p>
                  <div class="border-b py-6"></div>
                  <div class="flex pt-6 flex-wrap justify-evenly">
                    <p class="text-lg">品項: </p>
                      <div class="border h-5 w-5 bg-gray-400 my-1 ml-1">
                            <label for="name"><span></span></label>
                            <input type="checkbox" id="name" value="1">
                      </div>
                      <div>
                        <p class="text-lg">{{currentItem.unit}}g / {{currentItem.price}}TWD</p>
                      </div>
                  </div>

                  <div class="py-10 flex flex-wrap ">
                    <div class="flex justify-between border w-48">

                      <div class="flex items-center px-6">
                          <div>-</div>
                      </div>

                        <div class="flex px-6">
                          <input type="text" value="1" size="1">
                        </div>

                        <div class="flex items-center px-6">
                          <div>+</div>
                        </div>

                    </div>
                      <div class="flex border p-4 ml-10 cursor-pointer bg-black text-white">
                        <button>購物車</button>
                      </div>
                  </div>
              </div>
            </div>


            <footer_1 />

            
        </div>
    </div>    
  </div>

</template>

<script>
import footer_1 from '../components/footer_1.vue'
import Coffee_items from '../assets/coffee.json'
export default {
  data() {
    return {
      items: Coffee_items,
      id: 1,
      unit: 0
    }
  },
   mounted() {
    // 頁面一進來，捕捉目前網址中的 id
    this.id = this.$router.currentRoute._value.params.id

    // 在 router 裡面註冊一個 網址解析前 的觸發事件
    // 這只會在網址改變時才會觸發
    // 把改變後的網址的 id 存回去 this.id
    this.$router.beforeResolve(to => {
      this.id = to.params.id
    })
  },
  computed:{
    currentItem(){
      return this.items.filter(item => {
       return item.id == this.id
      })[0]
    }
  },
  components:{
   footer_1
  }
}


</script>

<style>

</style>