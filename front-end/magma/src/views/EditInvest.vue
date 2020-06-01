<template>
    <div>
        <form id="background">
            <div id="main" class="form-group">
                <h1>Is there something wrong?</h1>
                <div class="form-group">
                    <label>Project Name</label>
                    <input type="text" v-model="name" class="form-control" id="txtName" placeholder="Text here the name of the project!">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" v-model="description" id="txtDescription" rows="6" placeholder="Text here the description of the project!"></textarea>
                </div>

                <ShumpButton :type="'button'" id="btnEdit" v-bind:callback="publicProject" v-bind:text="'RELEASE'"/>
                <!-- <button type="button" v-on:click="publicProject" id="btnEdit" class="btn btn-primary btn-lg"></button> -->
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
    mounted: function() {
        this.getItem(this.id);
        this.socket.on('detailedItem', item => {
            this.author = item.author
            this.description = item.description
            this.name = item.name
        });
    },
    data() {
        return {
            socket: {},
            login: this.$route.query.login,
            id: this.$route.query.id,
            name: "",
            author: "",
            description: ""
        }
    },
    methods: {
        goBack(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        getItem(id) {
            this.socket.emit('getItem', id);
        },
        publicProject() {
            event.preventDefault();

            if (this.login === "" || this.description === "" || this.name === "") {    
                return
            }

            var projectObject = {
                id: this.id,
                author: this.login,
                description: this.description,
                name: this.name
            } 

            this.socket.emit('editItem', projectObject);

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
#btnEdit {
    margin-bottom: -25%;
    width: 100%;
}
button {
    background-color: #6E6FBF;
}
button:hover {
    transition-delay: 0.1s;
    background-color: rgba(110, 111, 191, 0.692);
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