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
                    name: "Hong Kong",
                    id: "hongkong",
                    timezone: "Asia/Hong_Kong",
                    added: true,
                    active: false
                },
                {
                    name: "Oslo",
                    id: "oslo",
                    timezone: "Europe/Oslo",
                    added: true,
                    active: true
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
            selectedCity: "oslo",
            showCities: false
        }
    },
    computed: {
        notSelectedCities: function() {
            return this.cities.filter(c => !c.added);
        },
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
    methods: {
        setCity: function(e) {
            console.log("Set city");
            console.log(e.target.value);
            var cityIndex = this.cities.findIndex(c => c.id === e.target.value);
            console.log("City index ",cityIndex);
            if(cityIndex+1) {
                this.cities[cityIndex].added = true;
    
                var activeCityIndex = this.cities.findIndex(c => c.active);
                console.log("activeCityIndex ",activeCityIndex);
                this.cities[activeCityIndex].active = false;
                this.cities[cityIndex].active = true;
            }
        }
    },
    created () {
        setInterval(function(timezone) {
            var d = new Date();
            var timezone = "Europe/Oslo"; // Default
            if(clock.selectedTimeZone) {
                timezone = clock.selectedTimeZone.timezone;
            }
            
            var localeSpecificTime = d.toLocaleTimeString('en-GB', { timeZone: timezone });
            //console.log("Today "+localeSpecificTime);;
            localeSpecificTime.replace(/:\d+ /, ' ');
            clock.time = localeSpecificTime;
        }, 1000);


    }
});
