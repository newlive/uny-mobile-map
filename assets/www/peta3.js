
/* JavaScript content from peta.js in folder common */
function initialize(lat, lng) {
    var myLatLng = myLatLng = new google.maps.LatLng(lat, lng);

    var mapOptions = {
        disableDefaultUI: true,
        zoomControl: true,
        zoom: 18,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    $.ajax({
        url: base_url + "peta.php?op=peta",
        dataType: "jsonp",
        crossDomain: true,
        jsonp: "callback",
        timeout: 10000,
        beforeSend: function() {
            $('#loading').attr('style', '');
        }, complete: function() {
            $('#loading').attr('style', 'display:none');
        }, success: function(data) {
            var jumpetak = 0;
            var idpeta = 0;
            var koor_petak = new Array();
            var nama_petak = new Array();
            var des_petak = new Array();
            koor_petak[jumpetak] = new Array();
            nama_petak[jumpetak] = new Array();
            des_petak[jumpetak] = new Array();
            var petak = new Array();
            $.each(data, function(k, v) {
                if (idpeta == 0) {
                    idpeta = v.idpeta;
                }
                else {
                    if (idpeta != v.idpeta) {
                        jumpetak++;
                        idpeta = v.idpeta;
                        koor_petak[jumpetak] = new Array();
                    }
                }
                var koordinat_peta = v.koordinat_peta;
                var koordinat = koordinat_peta.split(",");
                koor_petak[jumpetak].push(new google.maps.LatLng(parseFloat(koordinat[0]), parseFloat(koordinat[1])));
                nama_petak[jumpetak] = v.nama_peta;
                des_petak[jumpetak] = v.deskripsi;
            });
            if (idpeta != 0) {
                for (var i = 0; i <= jumpetak; i++) {
                    petak[i] = new google.maps.Polygon({
                        paths: koor_petak[i],
                        strokeColor: '#0000FF',
                        strokeOpacity: 1,
                        strokeWeight: 0,
                        fillColor: '#0000FF',
                        fillOpacity: 1
                    });

                    petak[i].infowindow = new google.maps.InfoWindow(
                            {
                                content: "<b>" + nama_petak[i] + "</b>" + "</br><p>" + des_petak[i] + "</p>",
                            });
                    petak[i].infowindow.name = nama_petak[i];
                    petak[i].setMap(map);
                    google.maps.event.addListener(petak[i], 'click', showInfo);
                }
            }

        }, error: function() {
            alert("Koneksi Error");
        }

    });




    if ((lat < (-7.77 + 0.005) && lat > (-7.77 - 0.005)) && ((lng < (110.387 + 0.002) && lng > (110.387 - 0.005)))) {
        var lokasiku = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng)
        });
        lokasiku.setMap(map);
        var infowindowku = new google.maps.InfoWindow();
        infowindowku.setContent('Anda berada disini');
        infowindowku.open(map, lokasiku);
        addInfoWindow(lokasiku, 'Anda berada disini');
    } else {
        alert('Anda berada di luar UNY');
    }
}
function addInfoWindow(marker, message) {
    var info = message;

    var infoWindow = new google.maps.InfoWindow({
        content: message
    });

    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
    });
}
function showInfo(event) {
    opened_info.close();
    if (opened_info.name != this.infowindow.name) {
        this.infowindow.setPosition(event.latLng);
        this.infowindow.open(map);
        opened_info = this.infowindow;
    }
}