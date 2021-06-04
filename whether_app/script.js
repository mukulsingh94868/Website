let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconFile; 
window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = '${proxy}api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=0f212f6e4b47ec26a93bca902756dfc3';
            fetch(api)
              .then((response) => {
                  return response.json();
              })
              .then(data => {
                  const {name} = data;
                  const {feels_like} = data.main;
                  const {id, main} = data.weather[0];
                  loc.textContent - name;
                  climate.textContent = main;
                  tempValue.textContent = Math.round(feels_like-273);
                  if(id<250){
                      tempIcon.src = './icon/storm.png'
                  }
                  else if(id<350){
                      tempIcon.src = '.icon/drizzle.png'
                  }
                  else if(id<550){
                      tempIcon.src = '.icon/rain.webp'
                  }
                  else if(id<650){
                      tempIcon.src = './icon/snow.png'
                  }
                  else if(id<800){
                      tempIcon.src = './icon/atmosphere.png'
                  }
                  else if(id==800){
                      tempIcon.src = './icon/cloud.png'
                  }
                  else if(id > 800){
                      tempIcon.src = ',/icon/sum.webp'
                  }
                 
                  
                  console.log(data);
              })

        })
    }
})