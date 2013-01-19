var fs = require("fs");

function getController(url, method) {
	var path = "controllers/";
	var parameters = url.pathname.substring(1,url.pathname.length).split("/");
	controllerPath = path+parameters[0]+".js";
	fs.exists( controllerPath, function(exists) {
			console.log("looking fo controller"+controllerPath);
		if (exists) {
			var controller = require(controllerPath);
			controller.method = method ? method : "GET";
			controller.data   = data;
			console.log(controller);
		} else {
			return;
		}
	});
}