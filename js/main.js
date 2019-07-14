

// Global variables

var map; // Holds map object
var layerList = {} // Object that holds layers for reference

// variables for individual layers
var states
var usfs
var fws
var flh

function initialize(){
	
	map = L.map('map').setView([40, -100], 4);
	
	L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Esri, HERE, DeLorme, MapmyIndia, © OpenStreetMap contributors, and the GIS user community',
		maxZoom: 13
	})
	.addTo(map);
	
	
	// Add states to map directly as an individual layer
	
	states = L.geoJson.ajax('https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0/query?where=1%3D1&f=geojson&outSR=4326', 
		{
		style:
		{
			"color": "#ffffff",
			fill: false,
			"weight": 2,
			"opacity": 0.65	
		}
	}).addTo(map).addEventListener('layeradd',sendStatesBack);
	
	// Add other layers to layerList 
	
	usfs = L.geoJson.ajax('data/fs-region.geojson', 
		{
		style:
		{
			"color": "#00ff00",
			"fill": true,
			"fillOpacity": 0.1,
			"weight": 2,
			"opacity": 1	
		}
	});	

	layerList['U.S. Forest Service'] = usfs;

	fws = L.geoJson.ajax('data/fws-region.geojson', 
		{
		style:
		{
			"color": "#0000ff",
			"fill": true,
			"fillOpacity": 0.1,
			"weight": 2,
			"opacity": 1	
		}
	});	

	layerList['U.S. Fish and Wildlife Service'] = fws;
	
	flh = L.geoJson.ajax('data/flh-region.geojson', 
		{
		style:
		{
			"color": "#ff0000",
			"fill": true,
			"fillOpacity": 0.1,
			"weight": 2,
			"opacity": 1	
		}
	});	

	layerList['Federal Lands Highway'] = flh;
	
	// Add default layers to map
	usfs.addTo(map);
	L.control.layers([],layerList,{
		collapsed: false
	}).addTo(map);
	
	usfs.bringToFront();
	
}

function sendStatesBack(){
	if (states != null){
		states.bringToBack();
	}
}