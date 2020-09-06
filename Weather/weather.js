let getWeather = function () {
    let xhr = new XMLHttpRequest();
  
    document.querySelector("#textid").value;
  
    let cityName = document.querySelector("#textid").value || "mumbai";
    let url =
   "https://api.openweathermap.org/data/2.5/weather?appid=166aa6371f2ae2afc94559a593f9d44c&units=metric&q=";
    url = url + cityName;
  
    xhr.open("GET", url);
    xhr.onload = () => {
      const myvalue = JSON.parse(xhr.responseText);
      domOperationForResultDisplay(myvalue);
    };
  
    xhr.send();
  };
  
  let domOperationForResultDisplay = (myvalue) => {
    console.log(myvalue);
   
    const maxTemp = myvalue.main.temp_max;
    const minTemp = myvalue.main.temp_min;
    const wind = myvalue.wind.speed;
    const clouds =myvalue.clouds.all;
    const parent = document.querySelector("#parent");
  
    const newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = "MAX " + maxTemp + " " + "MIN " + minTemp + " " + "WIND" + " " + " " + wind + " " + " " + "CLOUDS" + " " + clouds ;
  
    parent.insertBefore(newElement, parent.firstChild);
  };


  