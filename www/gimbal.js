"use strict";

var PLUGIN_ID = "Gimbal";

function doGimbal() {
	cordova.exec(function() {}, function(error) {}, "Gimbal", "gimbalMethod", []);
}
