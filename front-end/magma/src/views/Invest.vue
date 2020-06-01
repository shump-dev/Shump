<template>
    <div >
        <div id="background">
            <div class="container" v-for="(item) in items" :key="item">
                <div class="list-group-item" >
                    <InvestItem class="item-invest" 
                        v-bind:author="item.author" 
                        v-bind:callbackDel="deleteItem"
                        v-bind:callback="viewItem"    
                        v-bind:name="item.name" 
                        v-bind:id="item.id" 
                        v-bind:login="login" 
                        v-bind:description="item.description" 
                    />
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
import InvestItem from "../components/InvestItem.vue";
import io from "socket.io-client";

export default {
    created: function () {
        this.socket = io('http://localhost:3000');
    },
    components: {
        InvestItem,
    },
    data() {
        return {
            socket: {},
            items: [],
            login: this.$route.query.login,
        }
    },
    mounted: function() {
        this.socket.on('previousItem', items => {
            this.items = items
        });
        this.socket.on('receivedItem', item => {
            this.renderItem(item);
        });
    },
    methods: {
        viewItem(id) {
            this.$router.push({ path: '/Choose/Invest/DetailInvest', query: { login: this.login, id: id } })
        },
        renderItem(item) {
            this.items.push({ id: item.id, name: item.name, description: item.description, author: item.author})
        },
        deleteItem(id) {
            var answer = window.confirm("'Are you sure you want to delete this idea?'")
            if (answer) {
                this.items = this.items.filter((item) => {
                    return item.id != id 
                });
                this.socket.emit('removeItem', id);
            }
            
        }
    }
}

</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: #1b1a1a;
}
.list-group-item {
    width: 100%;
    height: 100%;
    background-color: #1b1a1a;
}
body {
    background-color: #1b1a1a;
}
#background h1 {
    text-align: center;
}
#background {
    display: table;
    background-color: #1b1a1a;
    width: 100%;
    height: 100%;
}
h1 {
    display: table-cell; 
    vertical-align: middle;
    margin: auto;
    position: relative;
    color: white;
}
.item-invest {
    max-height: 30%;
}
.list-container {  
    display: grid;  
    grid-gap: 5px;  
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);  
}
</style>