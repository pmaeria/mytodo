var path = require('path');
var config = {
	entry: path.resolve(__dirname, "app/main.js"),
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	}
};

module.exports = config;
