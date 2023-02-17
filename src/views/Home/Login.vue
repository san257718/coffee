<template>
    <div>
        <div v-if="logins" class="w-full min-h-screen flex justify-center items-center">
            <div class="w-1/5 h-[100px] text-lg font-bold border bg-gray-400">
                <div class="flex w-full">
                    <p>帳號</p>
                    <input type="text" v-model="userName">
                </div>
                <div class="flex w-full">
                    <p>密碼</p>
                    <input type="text" v-model="password">
                </div>
                <div class="" @click="login()">
                    <div>登入</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            userName: '',
            password: '',
            logins: true,
        }
    },

    methods: {
        login() {
            if (this.userName == 'test' && this.password == '1234') {
                localStorage.setItem('token', 'ImLogin')
                this.logins = false;
                this.$router.push('/')
            } else {
                alert('login failed')
            }

        }
    }
}

</script>