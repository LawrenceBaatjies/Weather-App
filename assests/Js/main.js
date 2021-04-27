window.addEventListener('load', () => {
    
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
               
            fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5&units=metric&lang=en", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "e6f3792fb3mshaa685e74286f766p184f22jsn7973439464d6",
                    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
                }
            })
           
            .then(data => {
                console.log(data);
                
                const {temperature,summary } = data.summary;
                // sets DOM elements from API
                temperatureDegree.textContent = temperature;
            })

            .catch(err => {
                console.error(err);
            });
      });  
    
    }

}); 

