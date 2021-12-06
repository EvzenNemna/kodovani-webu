var stred = SMap.Coords.fromWGS84(16.5431408, 49.0297323); // Vychozi stred mapy
var mapa = new SMap(JAK.gel("mapa"), stred, 7); // Vytvor mapu, propoj ji s HTML, vycentruj a nastav zoom 7
mapa.addControl(new SMap.Control.Sync()); 
mapa.addDefaultLayer(SMap.DEF_TURIST).enable(); // Nastav mapu na turistickou
// Povol ovladani mapy mysi
var mys = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM);
mapa.addControl(mys);

// Stahni XML soubor s GPX daty trasy
var xhr = new JAK.Request(JAK.Request.XML);
xhr.setCallback(window, "stazeno");
xhr.send("https://kloboukuv.cloud/pages/klobouk.xml");

// Po stazeni zavolej tuto funkci
var stazeno = function(xml) {
  console.log("GPX soubor stazeny...");
  var gpx = new SMap.Layer.GPX(xml); // musi to byt *.xml, jinak to bude NULL a zkolabuje to
  mapa.addLayer(gpx); // Pridej vrstvu do mapy
  gpx.enable();
  gpx.fit(); // zmen meritko mapy podle obsahu gpx
}