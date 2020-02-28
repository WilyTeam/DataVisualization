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
        deptData.infowindow = [];
        data.push(deptData);
        id++;
    });
}

function setLeftPanelContent(id) {
    let content = '<div class="left_panel_content">';

    if(id == -1){
        content = content + 
            '<span style="font-size: 7em; color: white;">' +
                '<i class="fas fa-info-circle"></i>' +
            '</span>' + 
            '<h2 class="left_panel_h2">The full info of a state will be showed here.</h2>';
    }else{
        content = content +     
            '<span style="font-size: 7em; color: white;">' +
            '<i class="fas fa-info-circle"></i>' +
            '</span>' +
            '<h2 class="left_panel_h2">' + data[id].name + '</h2>';
    }

    content = content + '</div>';

    document.getElementById("left_panel_1").innerHTML = content;
}

$(document).ready(function () {
    buildInitialData();
    $("#left_panel_1").css("left", "0");
    $("#right_info_panel").css("right", "0");
    setLeftPanelContent(-1);
});

frontiers = {
    "Paraguachón": [11.360313, -72.129504],
    "La Unión Puerto Santander": [8.365329, -72.404154],
    "Francisco de Paula Santander bridge": [7.916718, -72.462545],
    "Simon Bolívar bridge": [7.819144, -72.453193],
    "José Antonio Páez bridge": [7.089164, -70.740287],
    "Puerto Carreño": [6.185029, -67.491604],
    "Puerto Inírida": [3.880623, -67.923766],
    "Rumichaca": [0.814321, -77.664061],
    "San Miguél river": [0.251864, -76.875878]
};

hospitals = {
    "San cristobal de la cienaga": [[11.015383, -74.245945]],
    "Departamental hospital Juan Domínguez": [[10.916905, -74.763093]],
    "General hospital of Barranquilla": [[10.973205, -74.780440]],
    "Leon XIII universitary hospital": [[6.266953, -75.565402]],
    "Valle del Lili de Cali hospital": [[3.373182, -76.526273]],
    "San Rafael de albania hospital": [[11.160337, -72.591577]],
    "San agustin hospital": [[10.885786, -72.855616]],
    "ESE imsalud": [[7.884428, -72.486923]],
    "Erasmo Meoz hospital": [[7.904306, -72.491108]],
    "San Ignacio hospital": [[4.628549, -74.064004]]
}

// MAP

var map;
let openInfoWindow = null;

function onGoogleMapResponse() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {
            lat: 4.6990,
            lng: -78.1615
        }
    });

    setPolygons();
    setFrontierMarker(frontiers["Paraguachón"], "Paraguachón");
    setFrontierMarker(frontiers["La Unión Puerto Santander"], "La Unión Puerto Santander");
    setFrontierMarker(frontiers["Francisco de Paula Santander bridge"], "Francisco de Paula Santander bridge");
    setFrontierMarker(frontiers["Simon Bolívar bridge"], "Simon Bolívar bridge");
    setFrontierMarker(frontiers["José Antonio Páez bridge"], "José Antonio Páez bridge");
    setFrontierMarker(frontiers["Puerto Carreño"], "Puerto Carreño");
    setFrontierMarker(frontiers["Puerto Inírida"], "Puerto Inírida");
    setFrontierMarker(frontiers["Rumichaca"], "Rumichaca");
    setFrontierMarker(frontiers["San Miguél river"], "San Miguél river");
    
    setHospitalMarker(hospitals["San cristobal de la cienaga"][0], "San cristobal de la cienaga");
    setHospitalMarker(hospitals["Departamental hospital Juan Domínguez"][0], "Departamental hospital Juan Domínguez");
    setHospitalMarker(hospitals["General hospital of Barranquilla"][0], "General hospital of Barranquilla");
    setHospitalMarker(hospitals["Leon XIII universitary hospital"][0], "Leon XIII universitary hospital");
    setHospitalMarker(hospitals["Valle del Lili de Cali hospital"][0], "Valle del Lili de Cali hospital");
    setHospitalMarker(hospitals["San Rafael de albania hospital"][0], "San Rafael de albania hospital");
    setHospitalMarker(hospitals["San agustin hospital"][0], "San agustin hospital");
    setHospitalMarker(hospitals["ESE imsalud"][0], "ESE imsalud");
    setHospitalMarker(hospitals["Erasmo Meoz hospital"][0], "Erasmo Meoz hospital");
    setHospitalMarker(hospitals["San Ignacio hospital"][0], "San Ignacio hospital");
}

function setMapCenter(latlng) {
    map.setCenter(new google.maps.LatLng(latlng[0], latlng[1]));
}

function setPolygons(){
    console.log(data);

    var addListenersOnPolygon = function (polygon) {
        google.maps.event.addListener(polygon, 'click', function (event) {
            polygonOnClick(polygon.indexID, event);
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

function polygonOnClick(id, event) {
    if (openInfoWindow != null)
        openInfoWindow.close();

    let inmigrantScore = "";

    if (data[id].nInmigrants <= 7000) {
        inmigrantScore = 
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>';
    } else if (data[id].nInmigrants > 7000 && data[id].nInmigrants <= 15000) {
        inmigrantScore =
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>';
    } else if (data[id].nInmigrants > 15000 && data[id].nInmigrants <= 60000) {
        inmigrantScore = 
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>';
    } else if (data[id].nInmigrants > 60000 && data[id].nInmigrants <= 150000) {
        inmigrantScore = 
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; margin-right: 8px;">' +
                '<i class="fas fa-male stroke-transparent"></i>' +
            '</span>';
    } else if (data[id].nInmigrants > 150000) {
        inmigrantScore = 
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>' +
            '<span style="font-size: 2.7em; color: ' + data[id].color + '; margin-right: 8px;">' +
                '<i class="fas fa-male"></i>' +
            '</span>';
    }

    var contentString =
        '<div class = "info_window_close_button_container" ></div>' +
        '<div class = "polygon_info_window">' +
            '<h1>' + data[id].name + '</h1>' +
            '<div class="divider"></div>' +
            '<div class = "numbers_info">' +
                '<div class = "score">' +
                    inmigrantScore +
                '</div>' +
                '<div class = "score_txt">' +
                    '<p style="color: ' + data[id].color + ';">' + data[id].nInmigrants + '</p>' +
                    '<p class="inmigrants"> Inmigrants</p>' +
                '</div>' +
            '</div>' +
            '<a onclick="setLeftPanelContent(' + id + ')" class="button alt fit">SHOW FULL INFO</a>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        position: event.latLng,
        content: contentString
    });

    infowindow.addListener('closeclick', function () {
        setLeftPanelContent(-1);
    });

    infowindow.setZIndex(2000);
    infowindow.open(map);
    openInfoWindow = infowindow;
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
        displayFrontierInfoWindow(marker.url);
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
        displayHospitalInfoWindow(marker.url);
    });
}

// INFO WINDOWS

function displayFrontierInfoWindow(frontier) {
    if (openInfoWindow != null)
        openInfoWindow.close();

    var contentString =
        '<div class = "info_window_close_button_container" ></div>' +
        '<div class = "marker_info_window">' +
            '<div class = "title">' +
                '<h1>' + frontier + '</h1>' +
                '<span class="icon_frontier"></span>' +
            '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        position: {
            lat: frontiers[frontier][0],
            lng: frontiers[frontier][1]
        },
        content: contentString
    });

    infowindow.setZIndex(2000);
    infowindow.open(map);
    openInfoWindow = infowindow;
}

function displayHospitalInfoWindow(hospital) {
    if (openInfoWindow != null)
        openInfoWindow.close();

    var contentString =
        '<div class = "info_window_close_button_container" ></div>' +
        '<div class = "marker_info_window">' +
        '<div class = "title">' +
        '<h1>' + hospital + '</h1>' +
        '<span class="icon_hospital"></span>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        position: {
            lat: hospitals[hospital][0][0],
            lng: hospitals[hospital][0][1]
        },
        content: contentString
    });

    infowindow.setZIndex(2000);
    infowindow.open(map);
    openInfoWindow = infowindow;
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
