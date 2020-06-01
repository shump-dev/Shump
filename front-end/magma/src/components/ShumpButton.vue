<template>
    <button @click="execute" class="btn btn-primary">{{ text }}</button>
</template>

<script>
export default {
    props: {
        type: String,
        text: String,
        callback: {
            type: Function
        }
    },
    methods: {
        execute() {
            if (this.callback) {
                this.callback()
            }
        }

    }
}
</script>

<style scoped>
button:focus:not(.focus-visible) {
  box-shadow: none;
  background-color: rgba(110, 111, 191, 0.692);
}
button {
    border: none;
    outline: none;
    border: none;
    box-shadow: none;
    background-color: #6E6FBF;
}
button:hover {
    border: none;
    transition-delay: 0.1s;
    background-color: rgba(110, 111, 191, 0.692);
}
button:not(:disabled):not(:disabled):active{
    outline: none;
    border: none;
    box-shadow: none;
    background-color: rgba(110, 111, 191, 0.692);;
}
button:focus{
    outline: none;
    border: none;
    box-shadow: none;
    background-color: rgba(110, 111, 191, 0.692);
}
button:active:focus{
    outline:none;
    box-shadow: none;
    background-color: rgba(110, 111, 191, 0.692);
}
</style>