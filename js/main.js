const app = new Vue({
    el: "#app",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        elements: null,
        filteredElements: null,
        filterInput: '',
        filteredGenres: new Set(),
    },
    mounted: function() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(response => {
                (this.elements = response.data.response);
                this.filteredElements = this.elements;
                this.filteredGenres = new Set();
                for (let i = 0; i < this.filteredElements.length; i++) {
                    this.filteredGenres.add(this.filteredElements[i].genre);
                    console.log(this.filteredGenres);
                };

            });
    },

    methods: {
        filterElements() {
            if (this.filterInput == null) {
                this.filteredElements = elements;
            }
            this.filteredElements = this.elements.filter((element) => { return element.genre.toLowerCase().includes(this.filterInput.toLowerCase()); });
            console.log(this.filteredElements);
        },
    },
});