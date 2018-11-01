var clock = new Vue({
    el: '#clock',
    data() {
        return {
            cities: [
                {
                    name: "Addis Ababa",
                    id: "addis",
                    timezone: "Africa/Addis_Ababa",
                    added: false,
                    active: false
                },
                {
                    name: "Asmara",
                    id: "asmara",
                    timezone: "Africa/Asmara",
                    added: true,
                    active: false
                },
                {
                    name: "Cairo",
                    id: "cairo",
                    timezone: "Africa/Cairo",
                    added: false,
                    active: false
                },
                {
                    name: "Chicago",
                    id: "chicago",
                    timezone: "America/Chicago",
                    added: false,
                    active: false
                },
                {
                    name: "Oslo",
                    id: "oslo",
                    timezone: "Europe/Oslo",
                    added: true,
                    active: false
                },
                {
                    name: "New York",
                    id: "newyork",
                    timezone: "America/New_York",
                    added: true,
                    active: false
                },
                {
                    name: "San Francisco",
                    id: "sanfrancisco",
                    timezone: "America/Los_Angeles",
                    added: true,
                    active: false
                }
            ],
            time: "Loading",
            selectedCity: "",
            showCities: false
        }
    },
    computed: {
        activeCities: function() {
            return this.cities.filter(c => c.added);
        },
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
