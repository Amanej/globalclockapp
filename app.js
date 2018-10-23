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
                    active: true
                }
            ],
            time: new Date(),
        }
    },
    created () {
        setInterval(function() {
            var d = new Date();
            //console.log(d);
            var localeSpecificTime = d.toLocaleTimeString();
            localeSpecificTime.replace(/:\d+ /, ' ');
            clock.time = localeSpecificTime;
        }, 1000)
    }
})
