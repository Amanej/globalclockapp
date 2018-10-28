var clock = new Vue({
    el: '#clock',
    data() {
        return {
            cities: [
                {
                    name: "Oslo",
                    id: "oslo",
                    timezone: "Europe/Oslo",
                    active: false
                },
                {
                    name: "New York",
                    id: "newyork",
                    timezone: "America/New_York",
                    active: false
                },
                {
                    name: "San Francisco",
                    id: "sanfrancisco",
                    timezone: "America/Los_Angeles",
                    active: false
                }
            ],
            time: "Loading",
            selectedCity: ""
        }
    },
    computed: {
        selectedTimeZone: function() {
            console.log(this.selectedCity);
            var activeCities = this.cities.filter(c => c.name === this.selectedCity);
            console.log("Active cities ",activeCities);
            return activeCities[0]
        }
    },
    created () {
        setInterval(function(timezone) {
            var d = new Date();
            var timezone = "Europe/Oslo"; // Default
            if(clock.selectedTimeZone) {
                timezone = clock.selectedTimeZone.timezone;
            }
            
            //console.log("Selected city ",clock.selectedCity);
            //console.log("Selected timezone ",clock.selectedTimeZone.timezone)
            //var localeSpecificTime = d.toLocaleString('en-US', { timeZone: timezone })
            var localeSpecificTime = d.toLocaleTimeString('en-GB', { timeZone: timezone });
            console.log("Today "+localeSpecificTime);;
            localeSpecificTime.replace(/:\d+ /, ' ');
            clock.time = localeSpecificTime;
        }, 1000);
    }
});
