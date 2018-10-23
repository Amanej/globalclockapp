var clock = new Vue({
    el: '#clock',
    data() {
        return {
            cities: [
                {
                    name: "Oslo",
                    id: "oslo",
                    active: false
                },
                {
                    name: "New York",
                    id: "newyork",
                    active: false
                },
                {
                    name: "San Francisco",
                    id: "sanfrancisco",
                    active: false
                }
            ],
            time: new Date(),
            selectedCity: ""
        }
    },
    computed: {

    },
    created () {
        setInterval(function() {
            var d = new Date();
            var localeSpecificTime = d.toLocaleTimeString();
            localeSpecificTime.replace(/:\d+ /, ' ');
            clock.time = localeSpecificTime;
        }, 1000)
    }
});
