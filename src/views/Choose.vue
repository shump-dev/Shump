<template>
    <div>
        <form id="background">
            <button type="submit" id="btnInvest" class="btn btn-primary" @click="wantInvest">I want to invest!</button>
            <button type="submit" id="btnHelp" class="btn btn-primary" @click="needHelp">I need help :)</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        needHelp() {
            this.$router.push({ path: '/Choose/Invest', query: { } })
        },
        wantInvest() {
            this.$router.push({ path: '/Choose/Invest', query: { } })
        }
    }
}
</script>

<style scoped>
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
#btnInvest {
    margin-right: 5%;
}
#lblLogin {
    color: white;
}
</style>