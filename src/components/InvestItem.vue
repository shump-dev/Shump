<template>
    <div id="background" @click="execute">
        <div id="item">
           <img src="@\assets\idea.png" >
            <h1>{{ name }}</h1>
            <strong>{{ author }}</strong>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        description: String,
        author: String,
        callback: {
            type: Function
        }
    },
    methods: {
        execute() {
            if (this.callback) {
                this.callback(this.name, this.description, this.author)
            }
        }

    }
}
</script>

<style scoped>

</style>