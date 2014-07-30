"use strict";

var PLUGIN_ID = "GimbalCDV";

var Gimbal = {
	doGimbal: function() {
		//exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
		cordova.exec(function(res) { console.log('success'); console.log('res');}, function(error) { console.log('error'); console.log(error); }, "Gimbal", "gimbalMethod", ['testjd']);
	}
}

exports.Gimbal = Gimbal;
