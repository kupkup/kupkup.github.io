// ./app.js
const vm = new Vue({
    el: '#app',
    data: {
        results: []
    },

    mounted() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=CNY&limit=100")
            .then(response => { this.results = response.data })
    }
});