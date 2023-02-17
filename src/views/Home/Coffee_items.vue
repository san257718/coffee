<template>
  
      <div class="h-screen w-screen relative overflow-hidden">
      <img class=" object-cover opacity-80 -z-50 h-full w-full" src="@/assets/background/購物車背景.png" alt=""/>
        <div class=" absolute top-0 h-full w-full overflow-y-auto">
            <header_1 />

            <div class="flex flex-wrap justify-evenly pt-20">
              <div>
                <img :src="`/image/${currentItem.img}`">
              </div>

              <div class="flex-wrap">
                <p class="text-4xl font-bold pb-14 pt-8">{{currentItem.name}}</p>
                <p class="text-xl font-semibold pb-5">烘培度 : {{currentItem.roast}}</p>
                <p class="text-xl font-semibold pb-5">產地 : {{currentItem.Origin}}</p>
                <p class="text-xl font-semibold pb-5">處理法 : {{currentItem.method}}</p>
                <p class="text-xl font-semibold pb-5">風味 : {{currentItem.flavour}}</p>
                  <div class="border-b py-6"></div>
                  <div class="flex pt-6 flex-wrap justify-evenly">
                    <div>
                      <p class="text-lg ">{{count * currentItem.unit}}g / {{count * currentItem.price}} TWD</p>
                    </div>
                  </div>

                  <div class="flex py-12 justify-evenly flex-wrap">
                    <div class="flex relative ">
                      <div class="flex items-center cursor-pointer border px-4">
                          <div @click="sub">-</div>
                      </div>

                        <div class="flex px-4 border items-center">
                          <p>{{ count }}</p>
                        </div>

                        <div class="flex items-center cursor-pointer border px-4">
                          <div @click="add">+</div>
                        </div>
                    </div>

                    <div class="relative ">
                      <div class="flex justify-center border w-32 p-4 cursor-pointer bg-black text-white" @click="addToCart()">
                        加到購物車
                      </div>
                    </div>
                  </div>
              </div>
            </div>


            <footer_1 />

            
        </div>
    </div>    
  

</template>

<script>
import header_1 from '../../components/header_1.vue'
import footer_1 from '../../components/footer_1.vue'
import Coffee_items from '../../assets/coffee.json'
export default {
  data() {
    return {
      items: Coffee_items,
      id: 1,
      name:"",
      unit: 0,
      count: 1
      
    }
  },
   mounted() {
    // 頁面一進來，捕捉目前網址中的 id
    this.id = this.$router.currentRoute.value.params.id

    // 在 router 裡面註冊一個 網址解析前 的觸發事件
    // 這只會在網址改變時才會觸發
    // 把改變後的網址的 id 存回去 this.id
    // this.$router.beforeResolve(to => {
    //   if(to.path === "/Shopping/"){
    //     this.id = to.params.id
    //   }
      
    // })
  },
  computed:{
    currentItem(){
      return this.items.find((item) => item.id == this.id)
    }
  },
  methods:{
      add(){
        this.count++
      },
      sub(){
        if (this.count > 1){
          this.count--
        }else{
          this.count=1
        }
      },
      addToCart(){
        const carts = JSON.parse(window.localStorage.getItem("coffee.carts")) ?? []

        carts.push({
            id: this.id,
            count: this.count
        })

         window.localStorage.setItem("coffee.carts", JSON.stringify(carts))
         this.$router.push("/Shopping/")
      }
      
    
  },
  components:{
   footer_1,
   header_1
  }
}


</script>

<style>

</style>