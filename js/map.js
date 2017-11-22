function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(39.453742,-6.380850),
        zoom:16,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}