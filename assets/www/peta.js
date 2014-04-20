google.maps.visualRefresh = true;

var map;
var infoWindow;
//var historicalOverlay;
var koord_tempat;
function initialize(lat, lng) {
  var myLatLng;
  var lokasiini = window.localStorage.getItem("lokasikoor");
  
  if (lokasiini!==null) {
      var lok = lokasiini.split(",");
      koord_tempat = new google.maps.Marker({
                position: new google.maps.LatLng(parseFloat(lok[0]), parseFloat(lok[1])),
                title: "Lokasi"
            });
      if (parseFloat(lok[0])<-7.78 && parseFloat(lok[1])<110.0) {
         myLatLng = new google.maps.LatLng(parseFloat(lok[0]), parseFloat(lok[1]));
      } else {
         myLatLng = new google.maps.LatLng(-7.772909,110.386761); 
      }
      window.localStorage.removeItem("lokasikoor");
  } else {
      if (lat<-7.78 && lng<110.0) {
          myLatLng = new google.maps.LatLng(lat,lng);
      } else {
          myLatLng = new google.maps.LatLng(-7.772909,110.386761);
      }
  }
  
  var mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    zoom: 17,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  if(lokasiini!=null) {
        koord_tempat.setMap(map);
        
        var lokasicari = new google.maps.Marker({
                         animation: google.maps.Animation.DROP,
                         position: new google.maps.LatLng(lat,lng)
                         });
        
        lokasicari.setMap(map);
        
        var infowindowku = new google.maps.InfoWindow();
        infowindowku.setContent('Ini yang anda cari');
        infowindowku.open(map, koord_tempat);
        addInfoWindow(lokasicari, 'Anda berada disini');
  }
 
    
  if ((lat<(-7.77 + 0.005) && lat>(-7.77 - 0.005)) && ((lng<(110.387 + 0.002) && lng>(110.387 - 0.005)))) {
    var lokasiku = new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng)
    });
    lokasiku.setMap(map);
    var infowindowku = new google.maps.InfoWindow();
    infowindowku.setContent('Anda berada disini');
    infowindowku.open(map, lokasiku);
    addInfoWindow(lokasiku, 'Anda berada disini');
  } else {
      alert('Anda berada di luar UNY');
  }
 
  function addInfoWindow(marker, message) {
    var info = message;

    var infoWindow = new google.maps.InfoWindow({
        content: message
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });
 }
 
// //Gambar background
// 
// var newark = new google.maps.LatLng(-7.772527,110.385625);
//  var imageBounds = new google.maps.LatLngBounds(
//      new google.maps.LatLng(-7.777591,110.388479),
//      new google.maps.LatLng(-7.769214,110.390668));
//
//  var mapOptions = {
//    zoom: 17,
//    center: newark
//  };
//
//  var map = new google.maps.Map(document.getElementById('map-canvas'),
//      mapOptions);
//
//  historicalOverlay = new google.maps.GroundOverlay(
//      'http://s17.postimg.org/3plojujv3/peta.png',
//      imageBounds);
//  historicalOverlay.setMap(map);
 
 
   //FAKULTAS TEKNIK
   // Background FT
  var FTcoord = [
      new google.maps.LatLng(-7.768135,110.387565),
      new google.maps.LatLng(-7.768701,110.389146),
      new google.maps.LatLng(-7.769511,110.388848),
      new google.maps.LatLng(-7.769786,110.388775),
      new google.maps.LatLng(-7.76981,110.388762),
      new google.maps.LatLng(-7.769926,110.388633),
      new google.maps.LatLng(-7.770168,110.388344),
      new google.maps.LatLng(-7.770273,110.388265),
      new google.maps.LatLng(-7.770394,110.38821),
      new google.maps.LatLng(-7.771263,110.387965),
      new google.maps.LatLng(-7.772086,110.387771),
      new google.maps.LatLng(-7.771715,110.386435),
      new google.maps.LatLng(-7.770623,110.386688),
      new google.maps.LatLng(-7.769245,110.387146)

  ];

  FT = new google.maps.Polygon({
    paths: FTcoord,
    strokeColor: '#FEE6BF',
    strokeOpacity: 1,
    strokeWeight: 0,
    fillColor: '#FEE6BF',
    fillOpacity: 1
  });

  FT.setMap(map);


  // <--- mulai Gedung KPLT
  var KPLT;    
  var KPLTCoords = [
      new google.maps.LatLng(-7.769036,110.388017),
      new google.maps.LatLng(-7.769101,110.388253),
      new google.maps.LatLng(-7.769128,110.388245),
      new google.maps.LatLng(-7.769168,110.388361),
      new google.maps.LatLng(-7.769341,110.388308),
      new google.maps.LatLng(-7.769306,110.388192),
      new google.maps.LatLng(-7.769337,110.388183),
      new google.maps.LatLng(-7.769266,110.387947),
      new google.maps.LatLng(-7.769233,110.387956),
      new google.maps.LatLng(-7.769194,110.387833),
      new google.maps.LatLng(-7.769027,110.387885),
      new google.maps.LatLng(-7.769064,110.388007)
  ];

    KPLT = new google.maps.Polygon({
    paths: KPLTCoords,
    strokeColor: '#FF7700',
    strokeOpacity: 1,
    strokeWeight: 0,
    fillColor: '#FF7700',
    fillOpacity: 1
  });
  KPLT.setMap(map);
    
  google.maps.event.addListener(KPLT, 'click', showArrays);
  infowindow = new google.maps.InfoWindow();
  
  function showArrays(event) {
  var vertices = this.getPath();
  var keterangan = "<h7>KPLT FT UNY</h7>";
  infowindow.setContent(keterangan);
  infowindow.setPosition(event.latLng);
  infowindow.open(map);
  } //<---- KPLT selesai
  
  

    // TPA
  var gudang_dpn;
  var LatLnggudang_dpn_coord = [
      new google.maps.LatLng(-7.76879,110.388842),
      new google.maps.LatLng(-7.768821,110.38893),
      new google.maps.LatLng(-7.768928,110.388893),
      new google.maps.LatLng(-7.768899,110.388804)
  ];

  gudang_dpn = new google.maps.Polygon({
    paths: LatLnggudang_dpn_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });

  gudang_dpn.setMap(map);
  
  google.maps.event.addListener(gudang_dpn, 'click', gudang);
  infowindow = new google.maps.InfoWindow();
  
  function gudang(event) {
  var vertices = this.getPath();
  var keterangan = "<h7>TPA</h7>";
  infowindow.setContent(keterangan);
  infowindow.setPosition(event.latLng);
  infowindow.open(map);
} //<--- TPA selesai

  
  // Gedung Percetakan UNY
  var Gdg_PercetakanUNY;
  var LatLngGdg_PercetakanUNY_coord = [
      new google.maps.LatLng(-7.769289,110.38867),
      new google.maps.LatLng(-7.769341,110.38882),
      new google.maps.LatLng(-7.769653,110.388713),
      new google.maps.LatLng(-7.7696,110.388558)
  ];

  Gdg_PercetakanUNY = new google.maps.Polygon({
    paths: LatLngGdg_PercetakanUNY_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });

  Gdg_PercetakanUNY.setMap(map);
  
  google.maps.event.addListener(Gdg_PercetakanUNY, 'click', Gdg_PercetakanUNYf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_PercetakanUNYf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung Percetakan UNY</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
  } //<-- Percetakan UNY selesai
  
  
  // Gedung halaman_rumput
  var Gdg_halaman_rumput;
  var LatLng_halaman_rumput_coord = [
      new google.maps.LatLng(-7.768359,110.388129),
      new google.maps.LatLng(-7.768533,110.388624),
      new google.maps.LatLng(-7.768964,110.388493),
      new google.maps.LatLng(-7.768794,110.38798)
  ];

  Gdg_halaman_rumput = new google.maps.Polygon({
    paths: LatLng_halaman_rumput_coord,
    strokeColor: '#00FF00',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#00FF00',
    fillOpacity: 25
  });
  Gdg_halaman_rumput.setMap(map);
  
  google.maps.event.addListener(Gdg_halaman_rumput, 'click', Gdg_halaman_rumputf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_halaman_rumputf (event) {
  var vertices = this.getPath();
  var keterangan = "<h7>Halaman Rumput</h7>";
  infowindow.setContent(keterangan);
  infowindow.setPosition(event.latLng);
  infowindow.open(map);
} //<-- Selesai halaman_rumput
  

  // Gedung Gdg_sblhKPLT2
  var Gdg_sblhKPLT2;
  var LatLngGdg_sblhKPLT2_coord = [
      new google.maps.LatLng(-7.769702,110.3883),
      new google.maps.LatLng(-7.769745,110.388448),
      new google.maps.LatLng(-7.769814,110.38843),
      new google.maps.LatLng(-7.769773,110.388281)
  ];

  Gdg_sblhKPLT2 = new google.maps.Polygon({
    paths: LatLngGdg_sblhKPLT2_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });

  Gdg_sblhKPLT2.setMap(map);
  google.maps.event.addListener(Gdg_sblhKPLT2, 'click', Gdg_sblhKPLT2f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_sblhKPLT2f (event) {
  var vertices = this.getPath();

  var keterangan = "<h7>Gedung . . .</h7>";
  infowindow.setContent(keterangan);
  infowindow.setPosition(event.latLng);

  infowindow.open(map);
}

  // Gedung Gdg_sblhKPLT3
  var Gdg_sblhKPLT3;
  var LatLngGdg_sblhKPLT3_coord = [
      new google.maps.LatLng(-7.769734,110.388476),
      new google.maps.LatLng(-7.769767,110.388596),
      new google.maps.LatLng(-7.769856,110.388572),
      new google.maps.LatLng(-7.769823,110.38845)
  ];

  Gdg_sblhKPLT3 = new google.maps.Polygon({
    paths: LatLngGdg_sblhKPLT3_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });

  Gdg_sblhKPLT3.setMap(map);
  google.maps.event.addListener(Gdg_sblhKPLT3, 'click', Gdg_sblhKPLT3f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_sblhKPLT3f (event) {
  var vertices = this.getPath();

  var keterangan = "<h7>Gedung Genset</h7>";
  infowindow.setContent(keterangan);
  infowindow.setPosition(event.latLng);

  infowindow.open(map);
}
  
  // Gedung Gdg_sblhKPLT4
  var Gdg_sblhKPLT4;
  var LatLngGdg_sblhKPLT4_coord = [
      new google.maps.LatLng(-7.769839,110.388275),
      new google.maps.LatLng(-7.769855,110.388342),
      new google.maps.LatLng(-7.769972,110.388312),
      new google.maps.LatLng(-7.769954,110.388246)
  ];

  Gdg_sblhKPLT4 = new google.maps.Polygon({
    paths: LatLngGdg_sblhKPLT4_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });
  Gdg_sblhKPLT4.setMap(map);
  
  google.maps.event.addListener(Gdg_sblhKPLT4, 'click', Gdg_sblhKPLT4f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_sblhKPLT4f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung...</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
  // Gedung Gdg_sblhKPLT5
  var Gdg_sblhKPLT5;
  var LatLngGdg_sblhKPLT5_coord = [
      new google.maps.LatLng(-7.77007,110.3882),
      new google.maps.LatLng(-7.770099,110.388296),
      new google.maps.LatLng(-7.770194,110.388269),
      new google.maps.LatLng(-7.770164,110.388169)
  ];

  Gdg_sblhKPLT5 = new google.maps.Polygon({
    paths: LatLngGdg_sblhKPLT5_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });

  Gdg_sblhKPLT5.setMap(map);
  
  google.maps.event.addListener(Gdg_sblhKPLT5, 'click', Gdg_sblhKPLT5f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_sblhKPLT5f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Genset</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
  // Gedung mushola_KPLT
  var mushola_KPLT;
  var LatLngmushola_KPLT_coord = [
      new google.maps.LatLng(-7.769264,110.387809),
      new google.maps.LatLng(-7.769317,110.38795),
      new google.maps.LatLng(-7.769386,110.387923),
      new google.maps.LatLng(-7.769337,110.38778)
  ];

  mushola_KPLT = new google.maps.Polygon({
    paths: LatLngmushola_KPLT_coord,
    strokeColor: '#FFFFFF',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FFFFFF',
    fillopacity: 0
  });

  mushola_KPLT.setMap(map);
  
  google.maps.event.addListener(mushola_KPLT, 'click', mushola_KPLTf);
  infowindow = new google.maps.InfoWindow();
  
  function mushola_KPLTf (event) {
    var vertices = this.getPath();
    var keterangan = "<center><h7><b>Mushola KPLT</b></h7>\n\
                    <br><img src='assets/img/gedung/KPLTs.png'\n\
                    style='height:100%;width:100%;'/></center>";
  infowindow.setContent(keterangan);
  infowindow.setPosition(event.latLng);
  infowindow.open(map);
 /*
  *nk pengin nganggo bubble tab 
 var infoBubble = new InfoBubble ({
     maxWidth: 300
 });
 
 var div = document.createElement('DIV');
        div.innerHTML = 'Lantai 2';
 infoBubble.addTab('Gambar', keterangan);
 infoBubble.addTab('Lantai 1', "<B>Lantai 1</B>");
 infoBubble.addTab('Lantai 2', div);
 
 infoBubble.setPosition(event.latLng);
 
 infoBubble.open(map);
 */
//infoBubble.setContent(keterangan);
  /* var infowindow = new google.maps.InfoWindow({
      content: keterangan,
      maxWidth: 300
   });
 */
  
}
  //  PTBB
  var Gdg_PTBB;
  var Gdg_PTBB_coord = [
      new google.maps.LatLng(-7.768325,110.38761),
      new google.maps.LatLng(-7.768454,110.388038),
      new google.maps.LatLng(-7.768619,110.387987),
      new google.maps.LatLng(-7.768491,110.387559)
  ];

  Gdg_PTBB = new google.maps.Polygon({
    paths: Gdg_PTBB_coord,
    strokeColor: '#FF1493',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF1493',
    fillopacity: 0
  });

  Gdg_PTBB.setMap(map);
  
  google.maps.event.addListener(Gdg_PTBB, 'click', Gdg_PTBBf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_PTBBf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung PTBB</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //  PTBB2
  var Gdg_PTBB2;
  var Gdg_PTBB2_coord = [
      new google.maps.LatLng(-7.768673,110.387487),
      new google.maps.LatLng(-7.768721,110.387652),
      new google.maps.LatLng(-7.769196,110.387505),
      new google.maps.LatLng(-7.769146,110.387341)
  ];

  Gdg_PTBB2 = new google.maps.Polygon({
    paths: Gdg_PTBB2_coord,
    strokeColor: '#FF1493',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF1493',
    fillopacity: 0
  });
    Gdg_PTBB2.setMap(map);
    google.maps.event.addListener(Gdg_PTBB2, 'click', Gdg_PTBB2f);
    infowindow = new google.maps.InfoWindow();
  
  function Gdg_PTBB2f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung PTBB2</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
  //  dapurPTBB
  var Gdg_dapurPTBB;
  var Gdg_dapurPTBB_coord = [
      new google.maps.LatLng(-7.76857,110.387553),
      new google.maps.LatLng(-7.768596,110.387637),
      new google.maps.LatLng(-7.768663,110.387616),
      new google.maps.LatLng(-7.768632,110.387531)
  ];

  Gdg_dapurPTBB = new google.maps.Polygon({
    paths: Gdg_dapurPTBB_coord,
    strokeColor: '#FF1493',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF1493',
    fillopacity: 0
  });
    Gdg_dapurPTBB.setMap(map);
    google.maps.event.addListener(Gdg_dapurPTBB, 'click', Gdg_dapurPTBBf);
    infowindow = new google.maps.InfoWindow();
  
  function Gdg_dapurPTBBf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Dapur PTBB</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //  parkirKPLT
  var Gdg_parkirKPLT;
  var Gdg_parkirKPLT_coord = [
      new google.maps.LatLng(-7.768945,110.387637),
      new google.maps.LatLng(-7.769017,110.387844),
      new google.maps.LatLng(-7.769378,110.387734),
      new google.maps.LatLng(-7.769309,110.387508)
  ];
    Gdg_parkirKPLT = new google.maps.Polygon({
    paths: Gdg_parkirKPLT_coord,
    strokeColor: '#990088',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#990088',
    fillopacity: 0
  });

  Gdg_parkirKPLT.setMap(map);
    google.maps.event.addListener(Gdg_parkirKPLT, 'click', Gdg_parkirKPLTf);
    infowindow = new google.maps.InfoWindow();
  function Gdg_parkirKPLTf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>T.Parkir KPLT</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
  //  parkirKPLT2
  var Gdg_parkirKPLT2;
  var Gdg_parkirKPLT2_coord = [
      new google.maps.LatLng(-7.769206,110.3873),
      new google.maps.LatLng(-7.769261,110.387482),
      new google.maps.LatLng(-7.769326,110.387463),
      new google.maps.LatLng(-7.769269,110.387274)
  ];
  Gdg_parkirKPLT2 = new google.maps.Polygon({
    paths: Gdg_parkirKPLT2_coord,
    strokeColor: '#990088',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#990088',
    fillopacity: 0
  });
    Gdg_parkirKPLT2.setMap(map);
    google.maps.event.addListener(Gdg_parkirKPLT2, 'click', Gdg_parkirKPLT2f);
    infowindow = new google.maps.InfoWindow();
  
  function Gdg_parkirKPLT2f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>T.Parkir KPLT</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
//  //jajal
//  var bounds = new google.maps.LatLngBounds(
//      new google.maps.LatLng(-7.769448,110.387752),
//      new google.maps.LatLng(-7.769523,110.387815)
//      
//  );
//
//  // Define a rectangle and set its editable property to true.
//  var rectangle = new google.maps.Rectangle({
//    bounds: bounds,
//    editable: true
//  });
//
//  rectangle.setMap(map);

  
  
  // Gedung kantin_FT_depan
  var Gdg_kantin_FT_depan;
  var LatLng_kantin_FT_depan_coord = [
      new google.maps.LatLng(-7.769521,110.387975),
      new google.maps.LatLng(-7.769559,110.388121),
      new google.maps.LatLng(-7.76962,110.388101),
      new google.maps.LatLng(-7.769585,110.387957)
  ];

  Gdg_kantin_FT_depan = new google.maps.Polygon({
    paths: LatLng_kantin_FT_depan_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });
  Gdg_kantin_FT_depan.setMap(map);

  google.maps.event.addListener(Gdg_kantin_FT_depan, 'click', Gdg_kantin_FT_depanf);
  infowindow = new google.maps.InfoWindow();

  function Gdg_kantin_FT_depanf (event) {
  var vertices = this.getPath();
  var keterangan = "<h7>Kantin FT Depan</h7>";
  infowindow.setContent(keterangan);
  infowindow.setPosition(event.latLng);
  infowindow.open(map);
} //<-- Selesai kantin_FT_depan
  
  //  sipil1
  var Gdg_sipil1;
  var Gdg_sipil1_coord = [
      new google.maps.LatLng(-7.769392,110.387166),
      new google.maps.LatLng(-7.769432,110.387298),
      new google.maps.LatLng(-7.769754,110.387205),
      new google.maps.LatLng(-7.769718,110.387074)
  ];

  Gdg_sipil1 = new google.maps.Polygon({
    paths: Gdg_sipil1_coord,
    strokeColor: '#B24700',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#B24700',
    fillopacity: 0
  });

  Gdg_sipil1.setMap(map);
  
  google.maps.event.addListener(Gdg_sipil1, 'click', Gdg_sipil1f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_sipil1f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung T.Sipil</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //  sipil2
  var Gdg_sipil2;
  var Gdg_sipil2_coord = [
      new google.maps.LatLng(-7.769447,110.387313),
      new google.maps.LatLng(-7.769573,110.387776),
      new google.maps.LatLng(-7.769878,110.387691),
      new google.maps.LatLng(-7.769847,110.38759),
      new google.maps.LatLng(-7.769663,110.38764),
      new google.maps.LatLng(-7.769564,110.387282)
  ];

  Gdg_sipil2 = new google.maps.Polygon({
    paths: Gdg_sipil2_coord,
    strokeColor: '#B24700',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#B24700',
    fillopacity: 0
  });
    Gdg_sipil2.setMap(map);
  
  google.maps.event.addListener(Gdg_sipil2, 'click', Gdg_sipil2f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_sipil2f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung T.Sipil</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //  sipil3
  var Gdg_sipil3;
  var Gdg_sipil3_coord = [
      new google.maps.LatLng(-7.769742,110.387115),
      new google.maps.LatLng(-7.769899,110.387661),
      new google.maps.LatLng(-7.770002,110.387629),
      new google.maps.LatLng(-7.769843,110.387085)
  ];

  Gdg_sipil3 = new google.maps.Polygon({
    paths: Gdg_sipil3_coord,
    strokeColor: '#B24700',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#B24700',
    fillopacity: 0
  });

  Gdg_sipil3.setMap(map);
  
  google.maps.event.addListener(Gdg_sipil3, 'click', Gdg_sipil3f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_sipil3f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung T.Sipil</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //  mesin
  var Gdg_mesin;
  var Gdg_mesin_coord = [
      new google.maps.LatLng(-7.769968,110.387044),
      new google.maps.LatLng(-7.770132,110.387617),
      new google.maps.LatLng(-7.770253,110.387583),
      new google.maps.LatLng(-7.77012,110.387115),
      new google.maps.LatLng(-7.770293,110.387062),
      new google.maps.LatLng(-7.770265,110.386958)
  ];

  Gdg_mesin = new google.maps.Polygon({
    paths: Gdg_mesin_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });

  Gdg_mesin.setMap(map);
  
  google.maps.event.addListener(Gdg_mesin, 'click', Gdg_mesinf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_mesinf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung T.Mesin</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
  //  Oto1
  var Gdg_Oto1;
  var Gdg_Oto1_coord = [
      new google.maps.LatLng(-7.770237,110.387482),
      new google.maps.LatLng(-7.770266,110.38758),
      new google.maps.LatLng(-7.770687,110.387459),
      new google.maps.LatLng(-7.770568,110.387043),
      new google.maps.LatLng(-7.770473,110.387071),
      new google.maps.LatLng(-7.77056,110.387388)
  ];

  Gdg_Oto1 = new google.maps.Polygon({
    paths: Gdg_Oto1_coord,
    strokeColor: '#008800',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#008800',
    fillopacity: 0
  });

  Gdg_Oto1.setMap(map);
  
  google.maps.event.addListener(Gdg_Oto1, 'click', Gdg_Oto1f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_Oto1f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung T.Otomotif</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

// Gedung Elektronika
  var Ruang_Elka;
  var Ruang_Elka_coord = [
      new google.maps.LatLng(-7.770991,110.386826),
      new google.maps.LatLng(-7.771123,110.387306),
      new google.maps.LatLng(-7.77093,110.387361),
      new google.maps.LatLng(-7.77096,110.38746),
      new google.maps.LatLng(-7.771263,110.387374),
      new google.maps.LatLng(-7.771097,110.386795)
  ];

  Ruang_Elka = new google.maps.Polygon({
    paths: Ruang_Elka_coord,
    strokeColor: '#0066DD',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#0066DD',
    fillopacity: 0
  });

  Ruang_Elka.setMap(map);
  
  google.maps.event.addListener(Ruang_Elka, 'click', Ruang_Elkaf);
  infowindow = new google.maps.InfoWindow();
  
  function Ruang_Elkaf (event) {


  var vertices = this.getPath();

  var keterangan = "<h7>Gedung Jurusan Elektronika</h7>";
  infowindow.setContent(keterangan);
  infowindow.setPosition(event.latLng);

  infowindow.open(map);
}

  //  Elka2
  var Gdg_Elka2;
  var Gdg_Elka2_coord = [
      new google.maps.LatLng(-7.770667,110.386873),
      new google.maps.LatLng(-7.770839,110.387492),
      new google.maps.LatLng(-7.770951,110.38746),
      new google.maps.LatLng(-7.770778,110.386838)
  ];

  Gdg_Elka2 = new google.maps.Polygon({
    paths: Gdg_Elka2_coord,
    strokeColor: '#0066DD',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#0066DD',
    fillopacity: 0
  });

  Gdg_Elka2.setMap(map);
  
  google.maps.event.addListener(Gdg_Elka2, 'click', Gdg_Elka2f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_Elka2f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung T.Elektronika</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);   
    }

  // Taman_media
  var taman_media;
  var LatLngtaman_media_coord = [
      new google.maps.LatLng(-7.771294,110.387074),
      new google.maps.LatLng(-7.771371,110.387331),
      new google.maps.LatLng(-7.771717,110.387235),
      new google.maps.LatLng(-7.771642,110.386972)
  ];

  taman_media = new google.maps.Polygon({
    paths: LatLngtaman_media_coord,
    strokeColor: '#009900',
    strokeOpacity: 0.5,
    strokeWeight: 0,
    fillColor: '#009900',
    fillOpacity: 0.5
  });

  taman_media.setMap(map);
  
  google.maps.event.addListener(taman_media, 'click', taman_mediaf);
  infowindow = new google.maps.InfoWindow();
  
  function taman_mediaf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Taman Media</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  // Gedung RF
  var Gdg_RF;
  var LatLngGdg_RF_coord = [
      new google.maps.LatLng(-7.771194,110.386678),
      new google.maps.LatLng(-7.771286,110.387005),
      new google.maps.LatLng(-7.771398,110.386968),
      new google.maps.LatLng(-7.771305,110.386643)
  ];

  Gdg_RF = new google.maps.Polygon({
    paths: LatLngGdg_RF_coord,
    strokeColor: '#0066DD',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#0066DD',
    fillopacity: 0
  });

  Gdg_RF.setMap(map);
  
  google.maps.event.addListener(Gdg_RF, 'click', Gdg_RFf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_RFf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung RF</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
    
  // LAB PTK
  var Gdg_LabPTK;
  var LatLng_Gdg_LabPTK_coord = [
      new google.maps.LatLng(-7.771382,110.386618),
      new google.maps.LatLng(-7.771472,110.386949),
      new google.maps.LatLng(-7.771606,110.386911),
      new google.maps.LatLng(-7.771512,110.386578)
  ];

  Gdg_LabPTK = new google.maps.Polygon({
    paths: LatLng_Gdg_LabPTK_coord,
    strokeColor: '#0066DD',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#0066DD',
    fillopacity: 0
  });

  Gdg_LabPTK.setMap(map); 
  
  google.maps.event.addListener(Gdg_LabPTK, 'click', Gdg_LabPTKf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_LabPTKf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung LPTK</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
  //  Gedung Ruang Aula teater 
  
  var Gdg_AulaRT;
  var Gdg_AulaRT_coord = [
      new google.maps.LatLng(-7.771658,110.386962),
      new google.maps.LatLng(-7.7718,110.387435),
      new google.maps.LatLng(-7.771966,110.387388),
      new google.maps.LatLng(-7.771835,110.386913)
      
  ];

  Gdg_AulaRT= new google.maps.Polygon({
    paths: Gdg_AulaRT_coord,
    strokeColor: '#0066DD',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#0066DD',
    fillopacity: 0
  });

  Gdg_AulaRT.setMap(map);
  
  google.maps.event.addListener(Gdg_AulaRT, 'click', Gdg_ART);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_ART (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung LPTK</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
}
  
  // Gedung PKM FT 
  var Gdg_PKMFT;
  var Gdg_PKMFT_coord = [
      new google.maps.LatLng(-7.771771,110.386486),
      new google.maps.LatLng(-7.771871,110.386793),
      new google.maps.LatLng(-7.77198,110.386759),
      new google.maps.LatLng(-7.77188,110.386445)
      
  ];

  Gdg_PKMFT= new google.maps.Polygon({
    paths: Gdg_PKMFT_coord,
    strokeColor: '#0066DD',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#0066DD',
    fillopacity: 0
  });

  Gdg_PKMFT.setMap(map);
  
  google.maps.event.addListener(Gdg_PKMFT, 'click', Gdg_PKMFTf);
  infowindow = new google.maps.InfoWindow();
    
  function Gdg_PKMFTf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung PKM FT</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //  Gedung Media 
  var Gdg_Media;
  var Gdg_Media_coord = [
      new google.maps.LatLng(-7.771374,110.387365),
      new google.maps.LatLng(-7.771423,110.387541),
      new google.maps.LatLng(-7.771783,110.38744),
      new google.maps.LatLng(-7.771735,110.38726)
      
  ];

  Gdg_Media= new google.maps.Polygon({
    paths: Gdg_Media_coord,
    strokeColor: '#0066DD',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#0066DD',
    fillopacity: 0
  });

  Gdg_Media.setMap(map);
    google.maps.event.addListener(Gdg_Media, 'click', Gdg_Mediaf);
    infowindow = new google.maps.InfoWindow();
    
  function Gdg_Mediaf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gedung Media</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
    
  //  kantin
  var Gdg_kantin;
  var Gdg_kantin_coord = [
      new google.maps.LatLng(-7.771283,110.387514),
      new google.maps.LatLng(-7.771314,110.387617),
      new google.maps.LatLng(-7.77141,110.387586),
      new google.maps.LatLng(-7.771378,110.387484)
  ];

  Gdg_kantin = new google.maps.Polygon({
    paths: Gdg_kantin_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });

  Gdg_kantin.setMap(map);
  
  google.maps.event.addListener(Gdg_kantin, 'click', Gdg_kantinf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_kantinf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Kantin FT UNY</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //  gudang
  var Gdg_gudang;
  var Gdg_gudang_coord = [
      new google.maps.LatLng(-7.771331,110.387713),
      new google.maps.LatLng(-7.771364,110.387814),
      new google.maps.LatLng(-7.771673,110.387717),
      new google.maps.LatLng(-7.771643,110.387617)
  ];

  Gdg_gudang = new google.maps.Polygon({
    paths: Gdg_gudang_coord,
    strokeColor: '#BB0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#BB0000',
    fillopacity: 0
  });

  Gdg_gudang.setMap(map);
  
  google.maps.event.addListener(Gdg_gudang, 'click', Gdg_gudangf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_gudangf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Gudang prasarana</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //parkir1
  var Gdg_parkir1;
  var Gdg_parkir1_coord = [
      new google.maps.LatLng(-7.771649,110.387571),
      new google.maps.LatLng(-7.771705,110.387782),
      new google.maps.LatLng(-7.77203,110.387693),
      new google.maps.LatLng(-7.771965,110.387487)
  ];

  Gdg_parkir1 = new google.maps.Polygon({
    paths: Gdg_parkir1_coord,
    strokeColor: '#990088',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#990088',
    fillopacity: 0
  });

  Gdg_parkir1.setMap(map);
  
  google.maps.event.addListener(Gdg_parkir1, 'click', Gdg_parkir1f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_parkir1f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Tempat Parkir</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
  //  mushola
  var Gdg_mushola;
  var Gdg_mushola_coord = [
      new google.maps.LatLng(-7.771166,110.387527),
      new google.maps.LatLng(-7.771193,110.387616),
      new google.maps.LatLng(-7.771283,110.387586),
      new google.maps.LatLng(-7.771255,110.3875)
  ];

  Gdg_mushola = new google.maps.Polygon({
    paths: Gdg_mushola_coord,
    strokeColor: '#FFFFFF',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FFFFFF',
    fillopacity: 0
  });

  Gdg_mushola.setMap(map);
  
  google.maps.event.addListener(Gdg_mushola, 'click', Gdg_musholaf);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_musholaf (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Mushola</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
    
  //  LabElektro1
  var Gdg_LabElektro1;
  var Gdg_LabElektro1_coord = [
      new google.maps.LatLng(-7.770821,110.387618),
      new google.maps.LatLng(-7.770905,110.38789),
      new google.maps.LatLng(-7.771217,110.387799),
      new google.maps.LatLng(-7.771132,110.387524)
  ];

  Gdg_LabElektro1 = new google.maps.Polygon({
    paths: Gdg_LabElektro1_coord,
    strokeColor: '#FF9900',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF9900',
    fillopacity: 0
  });

  Gdg_LabElektro1.setMap(map);
  
  google.maps.event.addListener(Gdg_LabElektro1, 'click', Gdg_LabElektro1f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_LabElektro1f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Lab. T.Elektro</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
  
  //LabMesin1
  var Gdg_LabMesin1;
  var Gdg_LabMesin1_coord = [
      new google.maps.LatLng(-7.770455,110.387723),
      new google.maps.LatLng(-7.770544,110.387995),
      new google.maps.LatLng(-7.770905,110.38789),
      new google.maps.LatLng(-7.770821,110.387618)
  ];

  Gdg_LabMesin1 = new google.maps.Polygon({
    paths: Gdg_LabMesin1_coord,
    strokeColor: '#FF0000',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#FF0000',
    fillopacity: 0
  });

  Gdg_LabMesin1.setMap(map);
  
  google.maps.event.addListener(Gdg_LabMesin1, 'click', Gdg_LabMesin1f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_LabMesin1f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Lab. T.Mesin</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
    
  //  LabOto1
  var Gdg_LabOto1;
  var Gdg_LabOto1_coord = [
      new google.maps.LatLng(-7.770128,110.387833),
      new google.maps.LatLng(-7.770204,110.388094),
      new google.maps.LatLng(-7.770544,110.387995),
      new google.maps.LatLng(-7.770455,110.387723)
  ];

  Gdg_LabOto1 = new google.maps.Polygon({
    paths: Gdg_LabOto1_coord,
    strokeColor: '#008800',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#008800',
    fillopacity: 0
  });

  Gdg_LabOto1.setMap(map);
  
  google.maps.event.addListener(Gdg_LabOto1, 'click', Gdg_LabOto1f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_LabOto1f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Lab. T.Otomotif</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }

  //  LabSipil1
  var Gdg_LabSipil1;
  var Gdg_LabSipil1_coord = [
      new google.maps.LatLng(-7.769596,110.387939),
      new google.maps.LatLng(-7.769647,110.388121),
      new google.maps.LatLng(-7.769754,110.388094),
      new google.maps.LatLng(-7.769708,110.387912)
  ];

  Gdg_LabSipil1 = new google.maps.Polygon({
    paths: Gdg_LabSipil1_coord,
    strokeColor: '#B24700',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#B24700',
    fillopacity: 0
  });

  Gdg_LabSipil1.setMap(map);
  
  google.maps.event.addListener(Gdg_LabSipil1, 'click', Gdg_LabSipil1f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_LabSipil1f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Lab. T.Sipil</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
    
  //  LabSipil2
  var Gdg_LabSipil2;
  var Gdg_LabSipil2_coord = [
      new google.maps.LatLng(-7.769734,110.387845),
      new google.maps.LatLng(-7.769814,110.388129),
      new google.maps.LatLng(-7.770103,110.388046),
      new google.maps.LatLng(-7.770022,110.387762)
  ];

  Gdg_LabSipil2 = new google.maps.Polygon({
    paths: Gdg_LabSipil2_coord,
    strokeColor: '#B24700',
    strokeOpacity: 0,
    strokeWeight: 0,
    fillColor: '#B24700',
    fillopacity: 0
  });

  Gdg_LabSipil2.setMap(map);
  
  google.maps.event.addListener(Gdg_LabSipil2, 'click', Gdg_LabSipil2f);
  infowindow = new google.maps.InfoWindow();
  
  function Gdg_LabSipil2f (event) {
    var vertices = this.getPath();
    var keterangan = "<h7>Lab. T.Sipil</h7>";
    infowindow.setContent(keterangan);
    infowindow.setPosition(event.latLng);
    infowindow.open(map);
    }
}

//google.maps.event.addDomListener(window, 'load', initialize);