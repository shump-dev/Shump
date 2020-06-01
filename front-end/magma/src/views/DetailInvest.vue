<template>
    <div>
        <div id="background">
            <form id="main" class="form-group" v-on:submit="submitEvent">
                <h1>{{ name }}</h1>
                <h3>{{ description }}</h3>
                <br />
                <label>Author: <strong>{{ author }}</strong></label> 
                <ShumpButton v-if="login !== author" :type="'submit'" id="btnInvest" v-bind:text="'INVEST IN THIS IDEA'" />
                <ShumpButton v-if="login === author" :type="'submit'" id="btnEdit" v-bind:text="'EDIT IDEA'" />
            </form>
        </div>
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
            this.id = item.id
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
        helpItem() {
            alert('Contact ' + this.author)
        },
        submitEvent(event) {
            event.preventDefault();

            if (this.login !== this.author) {
                this.helpItem()
            } else {
                this.editItem()
            }
        },
        editItem() {
            this.$router.push({ path: '/Choose/Invest/DetailInvest/EditInvest', query: { login: this.login, id: this.id } })
        },
        deleteItem(id) {
            this.socket.emit('removeItem', id);
        }
    }
}
</script>

<style scoped>
label {
    margin-top: 5%;
}
button {
    font-size: 20pt;
}
textarea {
    resize: none;
}
label, h1, h3 {
    color: white;
}
h3 {
  display:inline
}
h1 {
    text-align: center;
    margin-bottom: 10%;
}
h3 {
    max-width: 100%;
    height: auto;
    white-space: normal !important;
}
button {
    margin-bottom: -20%;
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
    height: 95%;
    width: 80%;
    min-width: 50%;
    overflow: auto;
    margin: auto;
    border-radius: 4%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
}
</style>