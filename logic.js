//setting our geo url
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


//using d3 to read the url data
d3.json(url).then(function(data) {
    createFeatures(data.features);
});


//making the popup
function createFeatures(earthquakeData){
    //this is setting the popup features when we hover over each earthquake
    function onEachFeature(feature, layer){
        layer.bindPopup(`<h3>Where: ${feature.properties.place}</h3><hr><p>Time: ${new Date(feature.properties.time)}</p><hr><p>Magnitude: ${feature.properties.mag}</p><hr><p>Number of Felt Reports: ${feature.properties.felt}</p><hr><p>Tsunami Warning Level: ${feature.properties.tsunami}</p><hr><p>`);
    }

    //creating the markers for each earthquake
    function createCircleMarker(feature, latlng){
       let options = {
        radius: feature.properties.mag*3,
        fillColor: chooseColor(feature.properties.mag),
        color: chooseColor(feature.properties.mag),
        opacity: 0.75,
        fillOpacity: 0.25,
        weight: 1,
       }
       return L.circleMarker(latlng, options);
    }


    //reading the geojson data and establishing it as the variable earthquakes
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: createCircleMarker
    });
    createMap(earthquakes);
}

//setting the colors for each earthquake based on magnitude
//here is the link to find colors to use
//https://www.w3schools.com/colors/colors_picker.asp
function chooseColor(mag){
    switch(true){
        case(1.0 <= mag && mag <= 2.4):
            return "#0080BC";
        case (2.5 <= mag && mag <=3.9):
            return "#3ACC00";
        case (4.0 <= mag && mag <=5.4):
            return "#CCCC00";
        case (5.5 <= mag && mag <= 7.9):
            return "#CC3A00";
        case (8.0 <= mag && mag <=20.0):
            return "#BC0000";
        default:
            return "#33CCFF";
    }
}

//creating the map legend
let legend = L.control({position: 'bottomright'});

legend.onAdd = function(){
    let div = L.DomUtil.create('div', 'info legend');
    let grades = [1.0, 2.5, 4.0, 5.5, 8.0];
    let labels = [];
    let legendInfo = "<h4>Magnitude</h4>";

    div.innerHTML = legendInfo

    // go through each magnitude item to label and color the legend
    // push to labels array as list item
    for (let i = 0; i < grades.length; i++) {
          labels.push('<ul style="background-color:' + chooseColor(grades[i] + 1) + '"> <span>' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '' : '+') + '</span></ul>');
        }

      // add each label list item to the div under the <ul> tag
      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    
    return div;
    };




//creating the map
function createMap(earthquakes) {

    // Create the base layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      });
    
    // Create a baseMaps object.
    let baseMaps = {
        "Street Map": street,
        "Topographic Map": topo
    };
    
    // Create an overlay object to hold our overlay.
    let overlayMaps = {
        Earthquakes: earthquakes
    };
    
    // Create our map, giving it the streetmap and earthquakes layers to display on load.
    let myMap = L.map("map", {
        center: [
        37.09, -95.71
        ],
        zoom: 5,
        layers: [street, earthquakes]
    });
    
    // Create a layer control.
    // Pass it our baseMaps and overlayMaps.
    // Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
    legend.addTo(myMap);
    }
    
    