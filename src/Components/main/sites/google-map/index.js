// Get a reference to the database service
 // Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
var database = firebase.database();
const tenantId = "tenant-8f1cc381-a35e-454e-bcc3-bde6dedf878f";
const map_zoom = 12;
const TIME_DIFFERENCE_FOR_FILTERING_OLD_DATA = 30; // minutes
var map;

// Initialize and add the map
export default function initMap() {
    var center = {lat: 60.258787, lng: 24.844539};
    // The map, centered at Wizense Office
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: map_zoom, center: center});
    // The marker, positioned at Wizense Office
    // var marker = new google.maps.Marker({position: center, map: map});

    retrieveInitialGatewayPositions()
        .then(defineMarkers)
        .then(updateGatewaysPosition)
        .catch((error) => {console.error(error);})
        ;
}

function isRecentData(eventTimestamp) {
    var current = Date.now();
    if(current-(eventTimestamp*1000) > TIME_DIFFERENCE_FOR_FILTERING_OLD_DATA*60*1000) {
        return false;
    } else {
        return true;
    }
}

function updateGatewaysPosition(markers) {
    return new Promise((resolve, reject) => {
        try {
            let assetPath = "tenants/" + tenantId + "/assets/infrastructure/";
            database.ref(assetPath).on("child_changed", (snapshot) => {
                snapshot.ref.child("location/geoCoordinate").on("value", (geoSnapshot) => {
                    let geoCoordinateNew = geoSnapshot.val();
                    let mac = snapshot.key;
                    console.log(`geoCoordinateNew : ${JSON.stringify(geoCoordinateNew)}`);
                    if(markers[mac]) {
                        markers[mac].setMap(null);
                    }
                    markers[mac] = new google.maps.Marker({
                        position: {
                            lat : geoCoordinateNew.latitude,
                            lng : geoCoordinateNew.longitude,
                        }, 
                        label : "Octo " + 
                            mac.substring(mac.length-5,mac.length).replace(":","") 
                            // + " @ " + geoSnapshot.eventTimestamp
                            , 
                        map: map
                    });    
                });
            });
        } catch(err) {
            reject(err);
        }
    });
    
    
}

function defineMarkers(gatewaysPosition) {
    return new Promise((resolve, reject) => {
        try {
            let output = {};
            gatewaysPosition.forEach((ele) => {
                // console.log(`element : ${JSON.stringify(ele)}`);
                if(isRecentData(ele.eventTimestamp)) {
                    let marker = new google.maps.Marker({position: {
                        lat : ele.lat,
                        lng : ele.lon,
                    }, 
                    label : "Octo " + 
                        ele.mac.substring(ele.mac.length-5,ele.mac.length).replace(":","") 
                        // + " @ " + ele.eventTimestamp
                        , 
                    map: map});
                    output[ele.mac] = marker;
                }
            });
            resolve(output);
        } catch(err) {
            reject(err);
        }
    });
}

function retrieveInitialGatewayPositions() {
    return new Promise((resolve, reject) => {
        try {
            let output = [];
            let assetPath = "tenants/" + tenantId + "/assets/infrastructure/";
            database.ref(assetPath).once("value", 
                (snapshot) => {
                    // console.log("gateways are " + JSON.stringify(Object.keys(snapshot.val())));
                    Object.keys(snapshot.val()).forEach((mac) => {
                        // Check if this is a gateway
                        if(snapshot.val()[mac].deviceInfo && snapshot.val()[mac].deviceInfo.type === "gateway") {
                            if(snapshot.val()[mac].location && snapshot.val()[mac].location.geoCoordinate) {
                                // console.log(`${mac} :  ${JSON.stringify(snapshot.val()[mac].location.geoCoordinate)}`)
                                output.push({
                                    mac : mac,
                                    lat : snapshot.val()[mac].location.geoCoordinate.latitude,
                                    lon : snapshot.val()[mac].location.geoCoordinate.longitude,
                                    eventTimestamp : snapshot.val()[mac].location.geoCoordinate.eventTimestamp,
                                });
                            } else {
                                // console.warn("location geoCoordinate is missing for " + mac);
                            }
                        }
                    });
                    // console.log("output : " + JSON.stringify(output));
                    resolve(output);
                }, 
                (err) => {
                    reject(err);
                });
        } catch(err) {
            reject(err);
        }    
    });
}
