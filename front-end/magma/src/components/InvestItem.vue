<template>
    <div id="background">
        <div id="item">
            <div class="idea_div">
                <img id="idea" src="..\assets\idea.png" >
            </div>
            <div id="dataItem" @click="execute">
                <h1>{{ name }}</h1>
                <strong>{{ author }}</strong>
                <p>{{ description }}</p>
           </div>
           <img v-if="v_login === v_author" @click="executeDel" id="criss-cross" src="..\assets\criss-cross.png" >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            v_author: "",
            v_login: "",
        }
    },
    props: {
        id: String,
        name: String,
        description: String,
        author: String,
        callback: {
            type: Function
        },
        callbackDel: {
            type: Function
        },
        login: String
    },
    mounted() {
        this.v_login = this.login
        this.v_author = this.author

        console.log(this.v_login)
        console.log(this.v_author)
    },
    methods: {
        execute() {
            if (this.callback) {
                this.callback(this.id)
            }
        },
        executeDel() {
            if (this.callbackDel) {
                this.callbackDel(this.id)
            }
        }

    }
}
</script>

<style scoped>
.idea_div {
    height: 10%;
    width: 10%;
    padding: 2%;
}
body {
    text-align: left;
}
#dataItem, #criss-cross {
    cursor: pointer;
} 
#idea {
    height: 100%;
    width: 100%;
}
#dataItem {
    max-width: 80%;
    min-width: 80%;
}
#criss-cross {
    height: 80%;
    width: 80%;
    position: relative;
    margin: auto;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 1%;
}
#item {
    margin:auto;
    background-color: #121111;
    display: flex;
    flex-flow: row;
    border-radius: 10px;
    padding-right: 1%;
}
p, strong {
    color: rgb(182, 177, 177);
}
h1 {
    color: rgb(226, 222, 222);
}
</style>