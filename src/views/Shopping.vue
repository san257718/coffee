<template>
  <div id="app">
    <div class="h-screen w-screen relative overflow-hidden">
      <img class=" object-cover opacity-80 -z-50 h-full w-full" src="../assets/購物車背景.png" alt=""/>
        <div class=" absolute top-0 h-full w-full overflow-y-auto">
            <header class="flex flex-wrap justify-around">
                <img class=" flex justify-center items-center" src="../assets/Logo 咖啡.png" alt=""/>
                    <div class="flex flex-wrap md:flex-wrap justify-center items-center px-16 text-black">
                        <router-link to="/Home" class="text-xl mx-16">首頁</router-link>
                        <router-link to="/About" class="text-xl mx-16">關於我們</router-link>
                        <router-link to="/Shopping" class="text-xl mx-16">線上購物</router-link>
                    </div>
            </header>

            <main>
              <div class="flex flex-wrap justify-evenly">
                <div class="mx-16 py-5 ">
                  <img class="border" src="../assets/Group 1.png" alt="">
                  <p class="flex justify-center py-2"> 曼特寧 蘇門答臘 </p>
                  <p class="flex justify-center border-t-2 py-2 font-mono">200g / 300TWD</p>
                </div>

                <div class="mx-16 py-5">
                  <img class="border" src="../assets/Group 2.png" alt="">
                  <p class="flex justify-center py-2"> 瓜地馬拉 薇薇特南果 </p>
                  <p class="flex justify-center border-t-2 py-2 font-mono">200g / 350TWD</p>
                </div>

                <div class="mx-16 py-5">
                  <img class="border" src="../assets/Group 3.png" alt="">
                  <p class="flex justify-center py-2"> 夏威夷 可娜 </p>
                  <p class="flex justify-center border-t-2 py-2 font-mono">200g / 400TWD</p>
                </div>

                
                  <div class="mx-16 py-5">
                    <img class="border" src="../assets/Group 4.png" alt="">
                    <p class="flex justify-center py-2"> 哥倫比亞 </p>
                    <p class="flex justify-center border-t-2 py-2 font-mono">200g / 450TWD</p>
                  </div>

                  <div class="mx-16 py-5">
                    <img class="border" src="../assets/Group 5.png" alt="">
                    <p class="flex justify-center py-2"> 耶加雪夫 </p>
                    <p class="flex justify-center border-t-2 py-2 font-mono">200g / 500TWD</p>
                  </div>

                  <div class="mx-16 py-5">
                    <img class="border" src="../assets/Group 6.png" alt="">
                    <p class="flex justify-center py-2"> 肯亞 AA </p>
                    <p class="flex justify-center border-t-2 py-2 font-mono">200g / 500TWD</p>
                  </div>
                


              </div>
            </main>
       
     

        <footer_1 />
      </div>
    </div>
  </div>

</template>

<script>
import header_1 from '../components/header_1.vue'
import footer_1 from '../components/footer_1.vue'
export default {
  name: 'Home',
  components:{
   header_1,
   footer_1
  }
};
</script>

<style>

</style>