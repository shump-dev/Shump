<template>
    <div>
        <form id="background">
            <img src="..\assets\shump.png">
            <div id="mainLogin" class="form-group">
                
                <label id="lblLogin">Login</label>
                <input class="form-control" v-model="login" id="txtLogin" placeholder="Your login">

                <label id="lblLogin">Password</label>
                <input type="password" v-model="password"  class="form-control" id="txtSenha" placeholder="**********">
                
                <button id="btnLogin" class="btn btn-primary" @click="goToLogin">JOIN</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
#background img {
    margin: auto;
    padding-right: 5%;
    padding-left: 5%;
}
#background {
    background-color: #121111;
    height: 100%;
    width: 100%;
    align-items: center;
    position: absolute;
    display: grid;  
    grid-template-columns: 2fr;
}
#mainLogin {
    background-color: #1F2224;
    height: 85%;
    width: 50%;
    min-width: 50%;
    overflow: auto;
    margin: auto;
    margin-top: 0%;
    position: relative;
    border-radius: 4%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
}
#btnLogin {
    width: 100%;
    align-items: center;
    border: none;
    margin-top: 10%;
    background-color: #6E6FBF;
}
#btnLogin:hover {
    transition-delay: 0.1s;
    background-color: rgba(110, 111, 191, 0.692);
}
#btnBack {
    vertical-align: middle;
    height: 100%;
    position: relative;
}
#sEmailHelp {
    color: white;
    text-emphasis-color: white;
}
#lblLogin {
    color: white;
}
#txtLogin {
    margin-bottom: 5%;
}
</style>

<script>
export default {
    data() {
        return {
            password: "",
            login: "",
        }
    },
    computed: {
        username() {
            return this.$route.params.username
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        goToLogin() {
            this.$router.push({ path: 'Choose', query: { login: this.login } })
        }
    }
}
</script>