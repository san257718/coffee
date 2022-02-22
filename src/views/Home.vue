<template>
  

    <div class="h-screen w-screen relative overflow-hidden">
      <img class=" object-cover opacity-80 -z-50 h-full w-full" src="../assets/background/咖啡背景.jpg" alt=""/>
        <div class=" absolute top-0 overflow-y-auto  h-full w-full">
       
        <header_1 />

        <main>
          <div class="flex flex-wrap justify-around items-center py-24">
            <div>
              <img class="" src="../assets/background/咖啡圖片.png" />
              <p class="flex justify-center text-2xl font-bold py-6">各式咖啡飲品</p>
            </div>

            <div>
              <img src="../assets/background/咖啡圖片01.png" />
              <p class="flex justify-center text-2xl font-bold py-6">咖啡豆</p>
            </div>
          </div>
        </main>
        

        <footer_1 />
        
      </div>
    </div>



</template>

<script>
import header_1 from '../components/header_1.vue'
import footer_1 from '../components/footer_1.vue'
export default {
  
  components:{
   header_1,
   footer_1
  }
};
</script>

<style scoped>

</style>
