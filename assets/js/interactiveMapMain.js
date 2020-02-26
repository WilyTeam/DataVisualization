// MAIN

let data = [];

let n_inmigrants = [    
    139871,
    153346,
    327635,
    74645,
    14614,
    6631,
    630,
    6813,
    54638,
    12410,
    85059,
    735,
    4283,
    155689,
    85092,
    7085,
    8042,
    183215,
    8104,
    18900,
    90092,
    22257,
    8121,
    85780,
    43717,
    19474,
    3192,
    907,
    6011,
    344,
    68,
    3167,
    378
];

function buildInitialData(){
    let id = 0;
    geoData.features.forEach(function (value, index){
        deptData = {};
        deptData.id = id;
        deptData.name = value.properties.NOMBRE_DPT;
        deptData.area = value.properties.AREA / 1000000;
        deptData.geometry = value.geometry;
        deptData.nInmigrants = n_inmigrants[id];
        deptData.color = setPolygonsColor(n_inmigrants[id]);
        data.push(deptData);
        id++;
    });
}

function setLeftPanelContent(contentType) {
    let content = '<div class="left_panel_content">';

    if(contentType == "default"){
        content = content + 
            '<span style="font-size: 7em; color: white;">' +
                '<i class="fas fa-info-circle"></i>' +
            '</span>' + 
            '<h2 class="left_panel_h2">Click over any department to see the complet info about it.</h2>';
    }

    content = content + '</div>';

    document.getElementById("left_panel_1").innerHTML = content;
}

$(document).ready(function () {
    buildInitialData();
    $("#left_panel_1").css("left", "0");
    $("#right_info_panel").css("right", "0");
    setLeftPanelContent("default");
});


// MAP

var map;

function onGoogleMapResponse() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {
            lat: 4.6990,
            lng: -78.1615
        }
    });

    setPolygons();
    setFrontierMarker([11.360313, -72.129504], "Paraguachon");
    setFrontierMarker([8.365329, -72.404154], "Puerto santander");
    setFrontierMarker([7.916718, -72.462545], "Puente fransisco santander");
    setFrontierMarker([7.819144, -72.453193], "Puente simon bolivar");
    setFrontierMarker([7.089164, -70.740287], "Puente jose paez");
    setFrontierMarker([6.185029, -67.491604], "Puerto carreno");
    setFrontierMarker([3.880623, -67.923766], "Iniridia");
    setFrontierMarker([0.814321, -77.664061], "Rumichaca");
    setFrontierMarker([0.251864, -76.875878], "San miguel");
    
    setHospitalMarker([11.015383, -74.245945], "San cristobal de la cienaga");
    setHospitalMarker([10.916905, -74.763093], "Departamental Juan Domínguez");
    setHospitalMarker([10.973205, -74.780440], "General de Barranquilla");
    setHospitalMarker([6.266953, -75.565402], "Leon XIII");
    setHospitalMarker([3.373182, -76.526273], "Valle del Lili de Cali");
    setHospitalMarker([11.160337, -72.591577], "San Rafael de albania");
    setHospitalMarker([10.885786, -72.855616], "San agustin");
    setHospitalMarker([7.884428, -72.486923], "ESE imsalud");
    setHospitalMarker([7.904306, -72.491108], "Erasmo Meoz");
    setHospitalMarker([4.628549, -74.064004], "San Ignacio");
}

function setMapCenter(latlng) {
    map.setCenter(new google.maps.LatLng(latlng[0], latlng[1]));
}

function setPolygons(){
    console.log(data);

    var addListenersOnPolygon = function (polygon) {
        google.maps.event.addListener(polygon, 'click', function (event) {
            polygonOnClick(polygon.indexID);
        });
    };

    data.forEach(function (value){
        console.log(value.name);
        if (value.geometry.type == "Polygon"){
            let path = [];
            value.geometry.coordinates[0].forEach(function (coordinate) {
                var point = {
                    "lat": coordinate[1],
                    "lng": coordinate[0]
                };
                path.push(point);
            });
            var p = new google.maps.Polygon({
                paths: path,
                strokeWeight: 1,
                fillColor: value.color,
                strokeColor: value.color,
                fillOpacity: 0.6,
                indexID: value.id
            });
            p.setMap(map);
            addListenersOnPolygon(p);
            google.maps.event.addListener(p, "mouseover", function () {
                this.setOptions({
                    fillColor: "#FFF",
                    strokeColor: "#FFF"
                });
            });

            google.maps.event.addListener(p, "mouseout", function () {
                this.setOptions({
                    fillColor: data[p.indexID].color,
                    strokeColor: data[p.indexID].color
                });
            });
        }else{
            value.geometry.coordinates.forEach(function (coordinates) {
                let path = [];
                coordinates[0].forEach(function (coordinate){
                    var point = {
                        "lat": coordinate[1],
                        "lng": coordinate[0]
                    };
                    path.push(point);
                });
                var p = new google.maps.Polygon({
                    paths: path,
                    strokeWeight: 1,
                    fillColor: value.color,
                    strokeColor: value.color,
                    fillOpacity: 0.6,
                    indexID: value.id
                });
                p.setMap(map);
                addListenersOnPolygon(p);
                google.maps.event.addListener(p, "mouseover", function () {
                    this.setOptions({
                        fillColor: "#FFF",
                        strokeColor: "#FFF"
                    });
                });

                google.maps.event.addListener(p, "mouseout", function () {
                    this.setOptions({
                        fillColor: data[p.indexID].color,
                        strokeColor: data[p.indexID].color
                    });
                });
            });
        }
        
    });
}

function polygonOnClick(id){
    console.log(id);
}

function setPolygonsColor(nInmigrants) {
    let color = "#000000";

    if (nInmigrants <= 7000) {
        color = "#3C97DB";
    } else if (nInmigrants > 7000 && nInmigrants <= 15000) {
        color = "#F1A340";
    } else if (nInmigrants > 15000 && nInmigrants <= 60000) {
        color = "#F46D43";
    } else if (nInmigrants > 60000 && nInmigrants <= 150000) {
        color = "#D73027";
    } else if (nInmigrants > 150000) {
        color = "#9E0142";
    }
    return color;
}

// FRONTIERS MARKERS

function pinSymbol(fillColor, strokeColor) {
    return {
        path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
        fillColor: fillColor,
        fillOpacity: 1,
        strokeColor: strokeColor,
        strokeWeight: 1,
        scale: 1,
        labelOrigin: new google.maps.Point(0, -30)
    };
}

function setFrontierMarker(latlng, name){
    var marker = new google.maps.Marker({
        map: map,
        url: name,
        position: new google.maps.LatLng(latlng[0], latlng[1]),
        labelAnchor: new google.maps.Point(15, 65),
        labelInBackground: false,
        icon: pinSymbol("#8BC34A", "#558B2F"),
        label: {
                text: 'P',
                color: "white",
                fontWeight: "1000",
                fontSize: "1.05rem"
            },
        animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, 'click', function () {
        console.log(marker.url);
    });
}

function setHospitalMarker(latlng, name) {
    var marker = new google.maps.Marker({
        map: map,
        url: name,
        position: new google.maps.LatLng(latlng[0], latlng[1]),
        labelAnchor: new google.maps.Point(15, 65),
        labelInBackground: false,
        icon: pinSymbol("#03A9F4", "#0277BD"),
        label: {
                text: 'H',
                color: "white",
                fontWeight: "1000",
                fontSize: "1.05rem",
                lineHeight: "15px"
            },
        animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, 'click', function () {
        console.log(marker.url);
    });
}

function getMapOffset() {
    var mapOffset = 0;
    var zoom = map.getZoom();

    // y = x-(x*0.5)
    if (zoom <= 12) {
        mapOffset = 0.11;
    } else if (zoom > 12 && zoom <= 13) {
        mapOffset = 0.05;
    } else if (zoom > 13 && zoom <= 14) {
        mapOffset = 0.025;
    } else if (zoom > 14 && zoom <= 15) {
        mapOffset = 0.0125;
    } else if (zoom > 15 && zoom <= 16) {
        mapOffset = 0.00625;
    } else if (zoom > 16 && zoom <= 17) {
        mapOffset = 0.003125;
    } else if (zoom > 17 && zoom <= 18) {
        mapOffset = 0.0015625;
    } else if (zoom > 18 && zoom <= 19) {
        mapOffset = 0.00078125;
    } else if (zoom > 19 && zoom <= 20) {
        mapOffset = 0.000390625;
    } else if (zoom > 20 && zoom <= 21) {
        mapOffset = 0.0001953125;
    } else if (zoom > 21 && zoom <= 22) {
        mapOffset = 0.00009765625;
    }

    return mapOffset;
}
