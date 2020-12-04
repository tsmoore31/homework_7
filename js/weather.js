function gettingJSON(){
    document.getElementById('forecast').style.display = "block";
    let API_KEY = "18bb28f1489948234921caf0209f2283";
    //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location = "Ann Arbor";
    if (document.querySelector("#location").value != ""){
        location = document.querySelector("#location").value;
   }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = "imperial";
    if (document.querySelector("input[name = temp]:checked")){
        format = document.querySelector("input[name = temp]:checked").value
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=" + format + "&appid=" + API_KEY;
    // Your code here.  
    
    console.log("Query is :" + query);
    console.log(query)

    //Create and set variables for each of the elements you
    //need to update, location, highs and lows, 
    //the image, etc.

    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));

        let city = json.name;
        let temp = json.main.temp;
        let image = json.weather[0].icon;

        document.getElementById("forecast").style.display = "block";

        document.getElementById("tempImg").src = "http://openweathermap.org/img/w/" + image + ".png";
        document.getElementById("tempImg").alt = json.weather[0].description;
        document.getElementById("tempImg").title = json.weather[0].main;

        document.getElementById("loc").innerHTML = city;
        document.getElementById("temp").innerHTML = temp;
        
    });
}
