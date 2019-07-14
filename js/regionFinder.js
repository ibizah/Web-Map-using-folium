//RegionFinder.js

//used to find the region number
//based on service as those are not located in the geojson file


//For FWS
function fwsFinder(regionName){
var reg_num
  switch(regionName){
    case "Pacific":
      reg_num = "1";
      break;

    case "Southwest":
      reg_num = "2";
      break;

    case "Midwest":
      reg_num = "3";
      break;

    case "Southeast":
      reg_num = "4";
      break;

    case "Northeast":
      reg_num = "5";
      break;

    case "Mountain Prairie":
      reg_num = "6";
      break;

    case "Alaska":
      reg_num = "7";
      break;

    case "Pacific Southwest":
      reg_num = "8";
      break;
  }
  return reg_num;
};


function fws_FOFinder(regionName){
var FO_city
  switch(regionName){
    case "Pacific":
      FO_city = "Portland, OR";
      break;

    case "Southwest":
      FO_city = "Albuquerque, NM";
      break;

    case "Midwest":
      FO_city = "Bloomington, MN";
      break;

    case "Southeast":
      FO_city = "Atlanta, GA";
      break;

    case "Northeast":
      FO_city = "Hadley, MA";
      break;

    case "Mountain Prairie":
      FO_city = "Lakewood, CO";
      break;

    case "Alaska":
      FO_city = "Anchorage, AK";
      break;

    case "Pacific Southwest":
      FO_city = "Sacremento, CA";
      break;
  }
  return FO_city;
};


//For USFS

function fsFinder(regionName){
var reg_num

  switch(regionName){
    case "Northern":
      reg_num = "R1";
      break;

    case "Rocky Mountain":
      reg_num = "R2";
      break;

    case "Southwestern":
      reg_num = "R3";
      break;

    case "Intermountain":
      reg_num = "R4";
      break;

    case "Pacific Southwest":
      reg_num = "R5";
      break;

    case "Pacific Northwest":
      reg_num = "R6";
      break;

    case "Southern":
      reg_num = "R8";
      break;

    case "Eastern":
      reg_num = "R9";
      break;

    case "Alaska":
      reg_num = "R10";
      break;
  }


  return reg_num;
};

//For USFS
function fs_FOFinder(regionName){
var FO_city

  switch(regionName){
    case "Northern":
      FO_city = "Missoula, MT";
      break;

    case "Rocky Mountain":
      FO_city = "Golden, CO";
      break;

    case "Southwestern":
      FO_city = "Albuquerque, NM";
      break;

    case "Intermountain":
      FO_city = "Ogden, UT";
      break;

    case "Pacific Southwest":
      FO_city = "Vallejo, CA";
      break;

    case "Pacific Northwest":
      FO_city = "Portland, OR";
      break;

    case "Southern":
      FO_city = "Atlanta, GA";
      break;

    case "Eastern":
      FO_city = "Milwaukee, WI";
      break;

    case "Alaska":
      FO_city = "Juneau, AK";
      break;
  }


  return FO_city;
};

//NPS needs nondefault centroids. This function produces them for display

function nps_placement(regionName){
var LatLng

  switch(regionName){
    case "Pacific West":
      LatLng = L.latLng(40.84706, -118.30078);
      break;

    case "Intermountain":
      LatLng = L.latLng(36.45664, -106.52344);
      break;

    case "Midwest":
      LatLng = L.latLng(41.37681, -96.50391);
      break;

    case "Southeast":
      LatLng = L.latLng(33.43144, -81.5625);
      break;

    case "Northeast":
      LatLng = L.latLng(38.13456, -78.92578);
      break;

    case "National Capital":
      LatLng = L.latLng(38.82259, -76.64062);
      break;

    case "Alaska":
      LatLng = L.latLng(64.62388, -154.33594);
      break;

  }


  return LatLng;
};

function nps_FOFinder(regionName){
var FO_city

  switch(regionName){
    case "Pacific West":
      FO_city = "San Francisco, CA" +"<br>"+"Seattle, WA";
      break;

    case "Intermountain":
      FO_city = "Denver, CO";
      break;

    case "Midwest":
      FO_city = "Omaha, NE";
      break;

    case "Southeast":
      FO_city = "Atlanta, GA";
      break;

    case "Northeast":
      FO_city = "Philadelphia, PA";
      break;

    case "National Capital":
      FO_city = "Washington, D.C.";
      break;

    case "Alaska":
      FO_city = "Anchorage, AK";
      break;

  }


  return FO_city;
};

//usace

function usace_placement(regionName){
var LatLng

  switch(regionName){
    case "Southwestern":
      LatLng = L.latLng(34.45222, -99.66797);
      break;

    case "Northwestern":
      LatLng = L.latLng(45.8288, -109.33594);
      break;

    case "Mississippi Valley":
      LatLng = L.latLng(41.90228, -92.10938);
      break;

    case "Great Lakes and Ohio River":
      LatLng = L.latLng(39.90974, -84.19922);
      break;

    case "North Atlantic":
      LatLng = L.latLng(40.44695, -76.46484);
      break;

    case "South Atlantic":
      LatLng = L.latLng(32.24997, -82.08984);
      break;

    case "South Pacific":
      LatLng = L.latLng(37.30028, -110.21484);
      break;

    case "Pacific Ocean":
      LatLng = L.latLng(65.73063, -149.58984);
      break;


  }


  return LatLng;
};

function usace_FOFinder(regionName){
var FO_city

  switch(regionName){
    case "Southwestern":
      FO_city = "Dallas";
      break;

    case "Northwestern":
     FO_city = "Portland, OR";
      break;

    case "Mississippi Valley":
      FO_city = "Vicksburg, MS";
      break;

    case "Great Lakes and Ohio River":
      FO_city = "Cincinnati, OH";
      break;

    case "North Atlantic":
     FO_city = "Philadelphia, PA";
      break;

    case "South Atlantic":
      FO_city = "Atlanta, GA";
      break;

    case "South Pacific":
     FO_city = "San Francisco, CA";
      break;

    case "Pacific Ocean":
     FO_city= "Honolulu, HI";
      break;


  }


  return FO_city;
};

//Determine popup placment flh

function flh_placement(division){
var LatLng

  switch(division){

    case "Western":
      LatLng = L.latLng(45.58329, -114.78516);
      break;

    case "Central":
      LatLng = L.latLng(36.87962, -105.82031);
      break;

    case "Eastern":
      LatLng = L.latLng(35.17381, -84.42969);
      break;


  }


  return LatLng;
};

function flh_FOFinder(division){
var FO_city

  switch(division){

    case "Western":
      FO_city = "Vancouver, WA";
      break;

    case "Central":
      FO_city = "Lakewood, CO";
      break;

    case "Eastern":
      FO_city = "Sterling, VA";
      break;


  }


  return FO_city;
};


//blm

//Determine locations for popup

function blm_placement(regionName){
var LatLng

  switch(regionName){
    case "Eastern States":
      LatLng = L.latLng(36.87962, -86.83594);
      break;

    case "New Mexico":
      LatLng = L.latLng(34.74161, -99.84375);
      break;

    case "Wyoming":
      LatLng = L.latLng(41.64008, -99.31641);
      break;

    case "Montana-Dakotas":
      LatLng = L.latLng(47.15984, -103.35938);
      break;

    case "Arizona":
      LatLng = L.latLng(34.74161, -111.26953);
      break;

    case "Utah":
      LatLng = L.latLng(39.23225, -111.26953);
      break;

    case "California":
      LatLng = L.latLng(36.73888, -119.70703);
      break;

    case "Nevada":
      LatLng = L.latLng(39.77477, -116.54297);
      break;

    case "Idaho":
      LatLng = L.latLng(44.08759, -114.25781);
      break;

    case "Oregon-Washington":
      LatLng = L.latLng(43.70759, -120.58594);
      break;



    case "Alaska":
      LatLng = L.latLng(66.0622, -151.97379);
      break;

  }


  return LatLng;
};

function blm_FO_Finder(regionName){
var FO_city

  switch(regionName){
    case "Eastern States":
      FO_city = "Washington, D.C.";
      break;

    case "New Mexico":
      FO_city = "Santa Fe, NM";
      break;

    case "Wyoming":
      FO_city = "Cheyenne, WY";
      break;

    case "Montana-Dakotas":
      FO_city = "Billings, MT";
      break;

    case "Arizona":
      FO_city = "Phoenix, AZ";
      break;

    case "Utah":
      FO_city = "Salt Lake City, UT";
      break;

    case "California":
      FO_city = "Sacremento, CA";
      break;

    case "Nevada":
      FO_city = "Reno, NV";
      break;

    case "Idaho":
      FO_city = "Boise, ID";
      break;

    case "Oregon-Washington":
      FO_city = "Portland";
      break;

    case "Colorado":
      FO_city = "Lakewood, CO";
      break;


    case "Alaska":
      FO_city = "Anchorage, AK";
      break;

  }


  return FO_city;
};
