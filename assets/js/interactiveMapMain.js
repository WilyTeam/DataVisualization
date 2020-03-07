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

let cities = [
    ["Medellín", "Bello", "Rionegro", "Itagui", "Envigado"], 
    ["Barranquilla", "Soledad", "Malambo", "Baranoa", "Puerto Colombia"],
    ["Bogotá D.C"],
    ["Cartagena", "Mompós", "Turbaco"],
    ["Tunja", "Duitama", "Chiquinquira", "Aquitania", "Villa de Leyva"],
    ["Manizales", "Chinchina", "Villamaria", "Neira"],
    ["Florencia", "Morelia"],
    ["Popayan", "Santander de Quilichao"],
    ["Valledupar", "Rio de oro", "Aguachica"],
    ["Montera", "Lorica", "Montelibano"],
    ["Soacha", "Zipaquira", "Facatativa", "Mosquera", "Girardot", "Madrid"],
    ["Quibdó", "Tadó", "Condoto", "Baihia Solano", "Acandi"],
    ["Neiva", "Garzón", "Rivera", "San agustín"],
    ["Riohacha", "Maicao", "Uribia"],
    ["Santa Marta", "Ciénaga", "Aracataca"],
    ["Villavicencio", "Puerto Lopez", "Puerto Gaitán", "San Martín", "Acacías"],
    ["Pasto", "Ipiales", "Tumaco", "Túquerres", "Cumbal"],
    ["Cucúta", "Ocaña", "Pamplona", "Villa del Rosario", "El Zulia"],
    ["Armenia", "Calarcá", "Circasia", "Salento", "Montenegro"],
    ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "Quinchia", "Marsella"],
    ["Bucaramanga", "Barrancabermeja", "Piedecuesta", "San Gil", "Girón", "Floridablanca"],
    ["Sincelejo", "Corozal", "Covenas"],
    ["Ibagué", "El espinal", "Libano", "Melgar"],
    ["Cali", "Buenaventura", "Palmira", "Tuluá", "Cartago"],
    ["Arauca", "Puerto Rondón", "Tame"],
    ["Yopal", "Trinidad", "Monterrey"],
    ["Mocoa", "Puerto Asis", "Villagarzón"],
    ["Leticia", "Manaos", "Puerto Narino", "Iquitos"],
    ["Inírida", "Puerto Colombia"],
    ["San José de Guaviare", "Miraflores"],
    ["Mitú", "Papunahua"],
    ["Puerto Carreño", "La premavera"],
    ["San andrés"]
];

let state_hospitals = [
    ["Leon XIII universitary hospital"],
    ["Departamental hospital Juan Domínguez", "General hospital of Barranquilla"],
    ["San Ignacio hospital"],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    ["San Rafael de albania hospital", "San agustin hospital"],
    ["San cristobal de la cienaga"],
    [],
    [],
    ["ESE imsalud", "Erasmo Meoz hospital"],
    [],
    [],
    [],
    [],
    [],
    ["Valle del Lili de Cali hospital"],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

let state_borderPositions = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    ["Paraguachón"],
    [],
    [],
    ["Rumichaca"],
    ["La Unión Puerto Santander", "Francisco de Paula Santander bridge", "Simon Bolívar bridge"],
    [],
    [],
    [],
    [],
    [],
    [],
    ["José Antonio Páez bridge"],
    [],
    ["San Miguél river"],
    [],
    ["Puerto Inírida"],
    [],
    [],
    ["Puerto Carreño"],
    []
];

let help1 = [
    ["ACNUR (Humanitary help CRN)", "ADRA", "DRC (Humanity & Inclusion)", "IRC", "Mercy Corps", "NRC", "OIM"],
    ["ACNUR (Hias)", "DRC (Humanity & Inclusion)", "FICR (SNCRC)", "FUPAD", "NRC", "OIM", "UNICEF", "World Vision", "International Plan"],
    ["Accion contra el hambre", "ACNUR", "Caritas Switzerland", "DRC (Humanity & Inclusion)", "Federacion luterana mundial", "FUPAD", "NRC", "OIM", "Save the Children", "SNCRC"],
    ["ACNUR (Hias)", "FICR (SNCRC)", "FUPAD", "OIM", "International Plan"],
    ["ACNUR"],
    ["NRC"],
    [],
    [],
    ["Accion contra el hambre", "ACNUR", "Mercy Corps", "PMA (Parroquia San Francisco de Asis, SNCRC)", "UNICEF"],
    [],
    ["FICR (SNCRC)", "NRC"],
    [],
    [],
    ["Accion contra el hambre", "ACNUR (DRC, Malteser, Pastoral Social)", "DRC (Humanity & Inclusion)", "FAO", "FICR (SNCRC)", "FUPAD", "Malteser international", "Mercy Corps",
        "NRC", "OIM", "OXFAM", "PMA (SNCRC, Fundacion Guajira naciente)", "SNCRC", "Save the Children", "UNICEF", "Wolrd Vision"],
    ["NRC"],
    ["Federacion luterana mundial", "SNCRC", "Save the Children"],
    ["Accion contra el hambre", "ACNUR", "FICR (SNCRC)", "NRC", "OIM", "PMA (ASOPASTOS Club, Kiwanis Corporation, Scalabrini Coporation, Proinco fundation, Pastoral social)",
        "SNCRC", "UNFPA (Medicos del mundo)", "UNICEF"],
    ["Accion contra el hambre", "ACNUR (Scalabrini Coporation, CORPRODINCO)", "Ayuda en accion (Scalabrini Coporation)", "FICR (SNCRC)", "IRC", "NRC", "OIM", "OXFAM", "International plan",
        "PMA (CONSORNOC, COSPAS, SNCRC, Diocese of Cucuta, San Carlos Missionaries, Parroquia de nuestra señora de las gracias, Samaritan's Purse, TdH, World vision)",
        "Save the Children", "SNCRC", "UNFPA (Halu)", "UNICEF (Halu, World vision)", "World vision"],
    ["ACNUR", "NRC"],
    [],
    ["Accion contra el hambre", "ADRA", "FICR (SNCRC)", "NRC", "OIM", "OXFAM", "PMA (Samaritan's Purse)", "Save the Children", "SNCRC"],
    [],
    ["NRC"],
    ["ACNUR", "FUPAD", "NRC", "OIM", "Save the Children", "SNCRC"],
    ["FICR (SNCRC)", "Federacion luterana mundial", "FUPAD", "NRC", "PMA (AMAR, Apoyar, Confiar, Pastoral Social)", "Save the Children", "UNFPA (GENFAMI)", "UNICEF"],
    ["Federacion luterana mundial"],
    ["Accion contra el hambre", "FICR (SNCRC)"],
    [],
    ["SNCRC"],
    [],
    [],
    ["Accion contra el hambre", "FICR (SNCRC)"],
    []
];

let help2 = [
    ["ACNUR (CIRC, Corporacion Ayuda Humanitaria, Partoral social)", "Humanitary & Inclusion", "IRC"],
    ["ACNUR (Hias)", "DRC", "NRC", "ONU Women", "International plan"],
    ["ACNUR (Aldeas infantiles, Coalico, Pastoral social)", "Caritas Switzerland", "FUPAD", "NRC", "International plan", "War child"],
    ["ACNUR"],
    ["ACNUR"],
    [],
    [],
    [],
    ["Accion contra el hambre", "ACNUR", "NRC"],
    ["ACNUR"],
    ["NRC"],
    ["ACNUR"],
    [],
    ["ACNUR (Coalico, DRC, Pastoral social)", "DRC (Humanity & Inclusion)", "FUPAD", "NRC"],
    ["NRC"],
    [],
    ["ACNUR (Coalico, Corporacion infancia y desarrollo, Defensoria, Pastoral social)", "NRC", "UNFPA (Medicos del mundo)", "UNICE", "World vision"],
    ["ACNUR (Bethany, Coalico, CORPRODINCO, Defensoria, NRC)", "ADRA", "IRC", "NRC", "International plan", "UNFPA (Halu)"],
    [],
    ["ACNUR"],
    ["ACNUR (Aldeas infantiles, Defensoria)"],
    [],
    ["ACNUR"],
    ["ACNUR", "Diakonie (Fundacion tierra de la paz)"],
    ["ACNUR (Coalico, Defensoria)", "Federacion luterana mundial", "NRC", "Save the Children", "UNFPA (GENFAMI)"],
    [],
    ["ACNUR"],
    [],
    ["Diakonie (Corporacion infancia y desarrollo)"],
    [],
    [],
    ["Diakonie (Corporacion infancia y desarrollo)"],
    []
];

let help3 = [
    ["ACNUR (Corporacion ayuda humanitaria)"],
    ["ACNUR (Hias)", "NRC"],
    ["ACNUR (FUPAD)", "FUPAD", "NRC", "OIM", "OIT"],
    [],
    ["ACNUR"],
    [],
    [],
    ["OIM"],
    ["Accion contra el hambre"],
    [], 
    ["NRC"],
    [],
    [],
    ["ACNUR (DRC, FUPAD)", "FAO", "FUPAD", "NRC"],
    ["NRC"],
    [],
    ["ACNUR", "NRC", "OIM"],
    ["ACNUR (CORPRODINCO, COSPAS, Minuto de Dios)", "Ayuda en accion (Scalabrini Corporation)", "NRC"],
    [],
    [],
    [],
    [],
    ["OIM"],
    ["FUPAD", "NRC", "OIM"],
    ["ACNUR", "FUPAD", "NRC", "UNICEF"],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

function buildInitialData(){
    let id = 0;
    geoData.features.forEach(function (value, index){
        deptData = {};
        deptData.id = id;
        deptData.name = value.properties.NOMBRE_DPT;
        deptData.area = Math.round(value.properties.AREA / 1000000);
        deptData.geometry = value.geometry;
        deptData.nInmigrants = n_inmigrants[id];
        deptData.cities = cities[id];
        deptData.hospitals = state_hospitals[id];
        deptData.borderPositions = state_borderPositions[id];
        deptData.help1 = help1[id];
        deptData.help2 = help2[id];
        deptData.help3 = help3[id];
        deptData.color = setPolygonsColor(n_inmigrants[id]);
        deptData.infowindow = [];
        data.push(deptData);
        id++;
    });
}

function setInmigrantScore(id, scoreSize){
    let inmigrantScore = "";
    let size = "";

    if (scoreSize == "L"){
        size = "2.7em";
    }else{
        size = "1.5em";
    }

    if (id != -1){
        if (data[id].nInmigrants <= 7000) {
            inmigrantScore = 
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>';
        } else if (data[id].nInmigrants > 7000 && data[id].nInmigrants <= 15000) {
            inmigrantScore =
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>';
        } else if (data[id].nInmigrants > 15000 && data[id].nInmigrants <= 60000) {
            inmigrantScore = 
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>';
        } else if (data[id].nInmigrants > 60000 && data[id].nInmigrants <= 150000) {
            inmigrantScore = 
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; margin-right: 8px;">' +
                    '<i class="fas fa-male stroke-transparent"></i>' +
                '</span>';
        } else if (data[id].nInmigrants > 150000) {
            inmigrantScore = 
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>' +
                '<span style="font-size:' + size + '; color: ' + data[id].color + '; margin-right: 8px;">' +
                    '<i class="fas fa-male"></i>' +
                '</span>';
        }
    }

    return inmigrantScore;
}

function setLeftPanelContent(id) {
    let content = '<div class="left_panel_content">';

    let inmigrantScore = setInmigrantScore(id, "S");

    if(id == -1){
        content = content + 
            '<div class="default_content">' +
                '<span style="font-size: 7em; color: white;">' +
                    '<i class="fas fa-info-circle"></i>' +
                '</span>' + 
                '<h2 class="left_panel_h2">The full info of a state will be showed here.</h2>' +
            '</div>';
    }else{

        let citiesList = '<ul class="inner_list">';

        data[id].cities.forEach(function (city) {
            citiesList += '<li>' + city + '</li>';
        });

        citiesList += "</ul>";

        let hospitals = "";
        let hospitalsCount = '<li><span class="bold_txt">Atention hospitals for migrants: ' + data[id].hospitals.length + '</span></li>';

        if (data[id].hospitals.length > 0){
            hospitals =
                '<div class="info_container">' +
                    '<h2>Hospitals</h2>' +
                    '<div class="card">' +
                        '<div class="card_content">' +
                            '<ul>';

            data[id].hospitals.forEach(function (hospital) {
                hospitals += '<li class="clickable_li" onclick="openHospitalDialog(this)">' + hospital + '</li>';
            });

            hospitals += "</ul>"; 
            hospitals += "</div></div></div>";
        }

        let borderPositions = "";
        let subtitle = "";

        if (data[id].borderPositions.length > 0) {
            borderPositions =
                '<div class="info_container">' +
                '<h2>Border positions</h2>' +
                '<div class="card">' +
                    '<div class="card_content">' +
                        '<ul>';

            data[id].borderPositions.forEach(function (borderPosition) {
                borderPositions += '<li class="clickable_li" onclick="openBorderDialog(this)">' + borderPosition + '</li>';
            });

            borderPositions += "</ul>";
            borderPositions += "</div></div></div>";
            subtitle = "<h3>Border state</h3>";
        }

        let help1 = "";
        let help1Count = '<li><span class="bold_txt">Direct Emergency Assistance Entities: ' + data[id].help1.length + '</span></li>';

        if (data[id].help1.length > 0) {
            help1 =
                '<div class="info_container">' +
                '<h2>Direct Emergency Assistance Entities</h2>' +
                '<div class="card">' +
                '<div class="card_content">' +
                '<ul>';

            data[id].help1.forEach(function (help) {
                help1 += '<li>' + help + '</li>';
            });

            help1 += "</ul>";
            help1 += "</div></div></div>";
        }

        let help2 = "";
        let help2Count = '<li><span class="bold_txt">Protection Entities: ' + data[id].help2.length + '</span></li>';

        if (data[id].help2.length > 0) {
            help2 =
                '<div class="info_container">' +
                '<h2>Protection Entities</h2>' +
                '<div class="card">' +
                '<div class="card_content">' +
                '<ul>';

            data[id].help2.forEach(function (help) {
                help2 += '<li>' + help + '</li>';
            });

            help2 += "</ul>";
            help2 += "</div></div></div>";
        }

        let help3 = "";
        let help3Count = '<li><span class="bold_txt">Socioeconomic and Cultural Integration Entities: ' + data[id].help3.length + '</span></li>';

        if (data[id].help3.length > 0) {
            help3 =
                '<div class="info_container">' +
                '<h2>Socioeconomic and Cultural Integration Entities</h2>' +
                '<div class="card">' +
                '<div class="card_content">' +
                '<ul>';

            data[id].help3.forEach(function (help) {
                help3 += '<li>' + help + '</li>';
            });

            help3 += "</ul>";
            help3 += "</div></div></div>";
        }

        content = content +     
            '<div class="state_content">' +
                '<div class="info_container">' +
                    '<div class="title">' +
                        '<div style="width: 80%">' +
                            '<h1 style="color: ' + data[id].color + '">' + data[id].name + '</h1>' +
                            subtitle +
                        '</div>' +
                        '<div class = "score">' +
                            inmigrantScore +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="divider"></div>' +
                '<div class="info_container">' +
                    '<ul>' +
                        '<li style="color:' + data[id].color + '"><span class="bold_txt">Inmigrants: </span>' + data[id].nInmigrants + '</li>' +
                        '<li><span class="bold_txt">Area: </span>' + data[id].area + ' km²</li>' +
                        hospitalsCount +
                        help1Count +
                        help2Count +
                        help3Count +
                        '</br><li><span class="bold_txt">Main cities: </span></li>' +
                            citiesList +
                    '</ul>' +
                '</div>' +
                '<div class="divider"></div>' +
                hospitals +
                borderPositions +
                help1 +
                help2 +
                help3 +
                '<div class="gap"></div>' +
            '</div>';
    }

    content = content + '</div>';

    document.getElementById("left_panel_1").innerHTML = content;
}

function openHospitalDialog(hospitalName){
    displayHospitalInfoWindow(hospitalName.textContent);
    setMapCenter(hospitals[hospitalName.textContent][0]);
}

function openBorderDialog(hospitalName) {
    displayFrontierInfoWindow(hospitalName.textContent);
    setMapCenter(hospitals[hospitalName.textContent][0]);
}

$(document).ready(function () {
    buildInitialData();
    $("#left_panel_1").css("left", "0");
    $("#right_info_panels_container").css("right", "0");
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
};

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
    map.setCenter(new google.maps.LatLng(latlng[0], latlng[1] - getMapOffset()));
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

    let inmigrantScore = setInmigrantScore(id, "L");

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

    // y = x*0.5
    if (zoom <= 6) {
        mapOffset = 4.7;
    } else if (zoom > 6 && zoom <= 7) {
        mapOffset = 3.5;
    } else if (zoom > 7 && zoom <= 8) {
        mapOffset = 1.5;
    } else if (zoom > 8 && zoom <= 9) {
        mapOffset = 0.8;
    } else if (zoom > 9 && zoom <= 10) {
        mapOffset = 0.6;
    } else if (zoom > 10 && zoom <= 11) {
        mapOffset = 0.4;
    } else if (zoom > 11 && zoom <= 12) {
        mapOffset = 0.11;
    } else if (zoom > 12 && zoom <= 13) {
        mapOffset = 0.03;
    } else if (zoom > 13 && zoom <= 14) {
        mapOffset = 0.015;
    } else if (zoom > 14 && zoom <= 15) {
        mapOffset = 0.0095;
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
