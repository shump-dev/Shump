<template>
    <div id="background">
        <div class="list-container" v-for="(item) in items" :key="item.id">
            <InvestItem v-bind:author="item.author" 
                        v-bind:name="item.name" 
                        v-bind:description="item.description" />
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
            login: "",
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
        renderItem(item) {
            this.items.push({ id: this.items.length+1, name: item.name, description: item.description})
        },
    }
}

</script>

<style scoped>
.list-container {  
    display: grid;  
    grid-gap: 5px;  
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);  
}
</style>