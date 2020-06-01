<template>
    <div>
        <form id="background" v-on:submit="publicProject">
            <div id="main" class="form-group">
                <h1>Make your idea real!</h1>
                <div class="form-group">
                    <label>Project Name</label>
                    <input type="text" v-model="name" class="form-control" id="txtName" placeholder="Text here the name of the project!">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" v-model="description" id="txtDescription" rows="6" placeholder="Text here the description of the project!"></textarea>
                </div>

                <ShumpButton :type="'submit'" id="btnPublic" v-bind:text="'RELEASE IDEA'"/>
            </div>
        </form>
    </div>
</template>

<script>
import io from "socket.io-client";
import ShumpButton from '@/components/ShumpButton.vue'
 
export default {
    components: {
        ShumpButton,
    },
    created: function () {
        this.socket = io('http://localhost:3000');
    },
    data() {
        return {
            socket: {},
            messages: [],
            login: this.$route.query.login,
            name: "",
            description: ""
        }
    },
    methods: {
        goBack(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        publicProject(event) {
            event.preventDefault();

            if (this.login === "" || this.description === "" || this.name === "") {    
                return
            }

            var projectObject = {
                author: this.login,
                description: this.description,
                name: this.name,
            } 

            this.socket.emit('sendItem', projectObject);

            this.$router.push({ path: '/Choose/Invest', query: { login: this.login } })
        }
    }
}
</script>

<style scoped>
textarea {
    resize: none;
}
label, h1 {
    color: white;
}
h1 {
    text-align: center;
    margin-bottom: 10%;
}
button {
    font-size: 20pt;
}
#btnPublic {
    margin-bottom: -25%;
    width: 100%;
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
#main {
    background-color: #1F2224;
    height: 90%;
    width: 50%;
    min-width: 50%;
    overflow: auto;
    margin: auto;
    border-radius: 4%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
}
</style>