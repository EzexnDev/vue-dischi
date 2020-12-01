const app = new Vue({
    el: "#app",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        elements: null,
    },
    mounted: function() {
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then(response => (this.elements = response.data.response));
            console.log(this.elements);
        }
        // mounted() {
        //     for (i = 0; i < 10; i++) {
        //         axios.get(this.url).then((result) => {
        //             this.emailsList.push(result.data.response)
        //         });
        //     }
        //     console.log(this.emailsList);

    // },

    // methods: {},
});