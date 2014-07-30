"use strict";

var PLUGIN_ID = "GimbalCDV";

var Gimbal = {
	doGimbal: function() {
		cordova.exec(function() {}, function(error) {}, "Gimbal", "gimbalMethod", []);
	}
}

exports.Gimbal = Gimbal;
