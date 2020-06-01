<template>
    <div>
        <form id="background">
            <ShumpButton :type="'submit'" id="btnInvest" v-bind:callback="wantInvest" v-bind:text="'I want to invest!'"/>
            <ShumpButton :type="'submit'" id="btnHelp" v-bind:callback="needHelp" v-bind:text="'I have a idea :)'"/>
        </form>
    </div>
</template>

<script>
import ShumpButton from '@/components/ShumpButton.vue'
 
export default {
    components: {
        ShumpButton,
    },
    data() {
        return {
            password: "",
            login: this.$route.query.login,
        }
    },
    methods: {
        needHelp() {
            this.$router.push({ path: '/Choose/CreateInvest', query: { login: this.login } })
        },
        wantInvest() {
            this.$router.push({ path: '/Choose/Invest', query: { login: this.login } })
        }
    }
}
</script>

<style scoped>
button {
    font-size: 15pt;
}
#background {
    background-color: #121111;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: absolute;
    align-items: center;
}
#btnInvest, #btnHelp {
    margin-top: 10%;
    height: 10%;
    width: 30%;
    align-items: center;
    border: none;
    margin: auto;
}
button {
    background-color: #6E6FBF;
}
button:hover {
    transition-delay: 0.1s;
    background-color: rgba(110, 111, 191, 0.692);
}
#btnInvest {
    margin-right: 5%;
}
#lblLogin {
    color: white;
}
</style>